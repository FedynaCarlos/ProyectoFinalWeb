const path = require('path');
const { devNull } = require('os');
const db = require('../database/models');
const res = require('express/lib/response');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Usuario = require('../database/models/Usuario');
const Op = db.Sequelize.Op;
//const User = require('../models/User')

/**CRUD DE USUARIOS**/

const userControllersAdmSeq = {

  index: (req,res) =>{
      db.Usuario.findAll({
        include : 
        [{association : 'perfil'}]})
        .then(function(usuarios){ 
          res.render('listUsers', {usuarios});
        })
        .catch(error => res.send(error))
  },
  create: (req,res) => {
    db.Perfil.findAll()
      .then(function(perfil){
        res.render("createProduct", {perfil});
      })
  },
  save: (req,res) => {
    db.Producto.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
      perfil_id: req.body.perfil,
      imagen: req.file.filename
    })
    .then(usuarios => {
      res.redirect("/admUsuarios");
    })
    .catch(error => res.send(error))
  },
  show: (req,res)=>{
    db.Usuario.findByPk(req.params.id, {
      include : [{association : 'perfil'}]
    })
    .then(miUsuario=> {
      res.render('profilUser', {miUsuario})
    })
    .catch(error => res.send(error))
  },
  edit: (req,res) => {
    const perfil = db.Perfil.findAll()
    const usuarios = db.Usuario.findByPk(req.params.id, {
      include: [{association : 'perfil'}]
    })
    Promise.all([usuarios,perfil])
    .then( ([usuarioEditar, perfil]) => {
      res.render("editUser", {usuarioEditar, perfil})
    })
  },

  update: async (req, res) => {
    try {      
      await db.Usuario.update ({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        fechaNac: req.body.fechaNac,
        telefono: req.body.telefono,
        perfil_id: req.body.perfil,
        avatar: req.file ? req.file.filename : req.body.oldAvatar
        }, {
          where: { id: req.params.id }
        });
      setTimeout(function(){
        res.redirect('/admUsuarios');
      },500)
    }
      catch(error){res.send(error)}
  },
  /*
  update: (req, res) => { 

    const errors = validationResult(req);
   
    if (!errors.isEmpty()) {console.log(errors)
        return res.render('editUser.ejs') //('editUser.ejs', { errors: errors.mapped(), oldData: req.body })
    }
    db.Usuario.update ({
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      email: req.body.email,
      fechaNac: req.body.fechaNac,
      telefono: req.body.telefono,
      perfil_id: req.body.perfil,
      avatar: req.file ? req.file.filename : req.body.oldAvatar 
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(() => res.redirect('/admUsuarios'))
    .catch(error => res.send(error))
  },*/
  destroy:(req, res) => {
    db.Usuario.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.redirect('/admUsuarios'))
    .catch(error => res.send(error))
  },
  search: (req,res) => {
    db.Usuario.findAll({
      include: [{association : 'perfil'}],
      where : {
        nombres: {[Op.like]: `%${req.query.search}%`}
      }
    })
    .then(resultado => { 
      //console.log(resultado)
      res.render('listUsers', {usuarios : resultado}); })
    .catch(error => res.send(error))
  }
}

module.exports = userControllersAdmSeq;
