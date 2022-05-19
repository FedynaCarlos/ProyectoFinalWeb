const path = require('path');
const { devNull } = require('os');
const db = require('../database/models');
const res = require('express/lib/response');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Usuario = require('../database/models/Usuario');
const Op = db.Sequelize.Op;
//const User = require('../models/User')

const userControllersLoginSeq = {

  register: (req,res) => { 
  res.render('register.ejs');
  },

  processRegister: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('register', { errors: errors.mapped(), oldData: req.body })
    }
    /*Busco si el usuario esta en la base para no repetir el email */
    //let userInDb = db.Usuario.findByField('email',req.body.email)

    db.Usuario.findOne({limit:1,
      where : {
        email: (req.body.email)
      }
    })
    .then((userToRegister) => { 
     if (userToRegister){  //console.log(userToRegister) 
          return res.render('register', {
                    errors: { 
                        email: {
                            msg: 'El mail se encuentra registrado'
                        }
                    },
             oldData: req.body
         })
      } else { 
       db.Usuario.create({
          nombres: req.body.nombres,
          apellidos: req.body.apellidos,
          email: req.body.email,
          perfil_id: 2,
          fechaNac: req.body.fechaNacimiento,
          telefono: req.body.telefono,
          password: bcryptjs.hashSync(req.body.password,10),
          avatar: req.file.filename,
        })
          .then(() => {
            if (!req.body.email){
            res.redirect("/");
            } else {
              res.redirect("/admUsuarios");
            }
            ;
          })
          .catch((error) => res.send(error));
        /*
        let userToCreate = {
        ...req.body, 
        password: bcryptjs.hashSync(req.body.password,10),
        image: req.file.filename,
        } */
      }
    })
    .catch(error => res.redirect('login.ejs'))
     /* 
     delete userToCreate.cpassword,
     User.create(userToCreate);
     return res.redirect('/user/login')
    */
  },

  login: (req,res) => { 
    res.render('login.ejs');
  },

  authenticate: (req, res) => { 
      db.Usuario.findOne({limit:1,
          where : {
            email: (req.body.email)
          }
        })
        .then((userToLogin) => { 
          if (userToLogin){
           let isOkpassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
              if (isOkpassword){
                  delete userToLogin.password;    
                  req.session.userLogeado = userToLogin;
                     //console.log(userToLogin.perfil_id)
               //console.log('por aqui voy'+ locals.perfil_id)
                    /*  GUARDO LA COOKIE   */
                  if (req.body.recordar){
                      res.cookie('userMail', req.body.email , {maxAge: (1000 * 60) * 2})
                  }
                  return res.redirect('/');
              } else {
                  return res.render('login.ejs',{
                    errors: { email:{ msg: 'Las credenciales no son válidas' }}   
                  });
                }
          } else {
            return res.render('login.ejs',{
              errors: { email:{ msg: 'Las credenciales no son válidas' }}   
            });
          }
        })
        //.catch(error => res.redirect('error'))
        .catch(error => res.redirect('login.ejs'))
  },
  logout: (req, res) =>{
    res.clearCookie('userMail')
    req.session.destroy();
    return res.redirect('/');
  }
}

module.exports = userControllersLoginSeq;
