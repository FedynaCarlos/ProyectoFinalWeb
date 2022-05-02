const path = require('path');
const { devNull } = require('os');
const db = require('../../src/database/models');
const res = require('express/lib/response');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Usuario = require('../database/models/Usuario');
const Op = db.Sequelize.Op;
//const User = require('../models/User')

const userControllersSeq = {
  register: (req,res) => { 
  res.render('register.ejs');
  },

  processRegister: (req, res) => {
        
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.render('register', { errors: errors.mapped(), oldData: req.body })
    }
   
    /*Busco si el usuario esta en la base para no repetir el email */

    let userInDb = db.Usuario.findByField('email',req.body.email)

    if (userInDb) {
        return res.render('register', {
                    errors: { 
                        email: {
                            msg: 'El mail se encuentra registrado'
                        }
                    },
             oldData: req.body
         })
    }

    let userToCreate = {
        ...req.body, 
        password: bcryptjs.hashSync(req.body.password,10),
        image: req.file.filename,
    }

     delete userToCreate.cpassword,
     User.create(userToCreate);
     return res.redirect('/user/login')
    
  },

  login: (req,res) => { 
         
    res.render('login.ejs');
    
  },

  authenticate: (req, res) => { 
       
    // return res.send(req.body);

     let userToLogin = db.Usuario.findByField('email' , req.body.email);
          
    if (userToLogin){

         let isOkpassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

        if (isOkpassword){
             delete userToLogin.password;    
             
             req.session.userLogeado = userToLogin;

             /*  GUARDO LA COOKIE*/
             if (req.body.recordar){
                 res.cookie('userMail', req.body.email , {maxAge: (1000 * 60) * 2})
             }

            return res.redirect('/');
         } else {
            return res.render('login.ejs',{
              errors: {
              email:{ msg: 'Las credenciales no son válidos' }
              }   
            });
          }
     } 
  },

  logout: (req, res) =>{
    res.clearCookie('userMail')
    req.session.destroy();
    return res.redirect('/');
  },
  

  /* tabla de administracion de usuarios*/
  index: (req,res) =>{
      db.Usuario.findAll()
        .then(function(usuarios){ 
          res.render('listUsers', {usuarios});
        })
        .catch(error => res.send(error))
  },

  create: (req,res) => {
    db.Cepa.findAll()
      .then(function(cepas){
        res.render("createProduct", {cepas});
      })
  },

  save: (req,res) => {
    db.Producto.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
      cepa_id: req.body.cepa,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      imagen: req.file.filename
      
    })
    .then(vinos => {
      res.redirect("/administrar");
    })
    .catch(error => res.send(error))
  },
  show: (req,res)=>{
    db.Producto.findByPk(req.params.id, {
      include : [{association : 'cepa'}]
    })
    .then(miVino=> {
      
      res.render('detail', {miVino})
    })
    .catch(error => res.send(error))
  },
  edit: (req,res) => {
    const cepas = db.Cepa.findAll()
    const productos = db.Producto.findByPk(req.params.id, {
      include: [{association : 'cepa'}]
    })
    Promise.all([productos,cepas])
    .then( ([vinoEditar, cepas]) => {
      res.render("editProduct", {vinoEditar, cepas})
    })
  },
  update: (req, res) => {
    db.Producto.update ({
      nombre: req.body.nombre,
      precio: req.body.precio,
      cepa_id: req.body.cepa,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      imagen: req.file ? req.file.filename : req.body.oldImagen
    }, {
      where: {
        produc_id: req.params.id
      }
    })
    .then(() => res.redirect('/administrar'))
    .catch(error => res.send(error))
  },
  destroy:(req, res) => {
    db.Producto.destroy({
      where: {
        produc_id: req.params.id
      }
    })
    .then(() => res.redirect('/administrar'))
    .catch(error => res.send(error))
  },
  search: (req,res) => {
    db.Producto.findAll({
      include: [{association : 'cepa'}],
      where : {
        nombre: {[Op.like]: `%${req.query.search}%`}
      }
    })
    
    .then(resultado => { 
      //console.log(resultado)
      res.render('listProducts', {productos : resultado}); })
    .catch(error => res.send(error))
  }
 
}



module.exports = userControllersSeq;
