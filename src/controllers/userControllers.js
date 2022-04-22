const fs = require('fs');
const { validationResult } = require('express-validator');
const User = require('../models/User')
const bcryptjs = require('bcryptjs');
const usuariosController = {
    register: (req,res) => {
        res.render('register.ejs');
    },
    processRegister: (req, res) => {
        
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.mapped(), oldData: req.body })
        }
       
        /*Busco si el usuario esta en la base para no repetir el email */

        let userInDb = User.findByField('email',req.body.email)

        if (userInDb) {
            return res.render('register', {
                        errors: { 
                            email: {
                                msg: 'El mail se encuentra registrado'
                            }
                        },
                 oldData: req.body
             })
        }6


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
       
        let userToLogin = User.findByField('email' , req.body.email);
        
        
        if (userToLogin){

            let isOkpassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkpassword){
                delete userToLogin.password;    
                //console.log(userToLogin);
                req.session.userLogeado = userToLogin;
                //console.log(req.session.userLogeado)
                return res.redirect('/');
            }
            else {
            return res.render('login.ejs',{
            errors: {
                email:{ 
                    msg: 'Las credenciales no son válidos'
                }
            }   
            });
        }
        }
    },/*
    userLogeado: (req, res) => {
        
        return res.render('/',{
            
            user: req.session.userlogeado
        })
        
    },*/
    logout: (req, res) =>{
        
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usuariosController;