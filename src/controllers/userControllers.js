const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');

const usuariosController = {
    register: (req,res) => {
        res.render('register.ejs');
    },
    create: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.mapped(), old: req.body })
        } else {
            let image
            if (req.file != undefined) {
                image = req.file.filename
            } else {
                image = '/users/404-user.jpg'
            }
            let nuevoUser = {
                id: usuarios[usuarios.length -1].id +1,
                ...req.body,
                image
            }
            nuevoUser.category = 'user';
            nuevoUser.password = bcrypt.hashSync(nuevoUser.password, 10);
            delete nuevoUser.cpassword;
            let usuarioNuevo = [...usuarios, nuevoUser];
            usuarioNuevo.password = bcrypt.hashSync(nuevoUser.password, 10);
            fs.writeFileSync(usersFilePath, JSON.stringify(usuarioNuevo, null, ''));
            res.redirect('/');
        }
    },

    login:(req,res)=> {
        res.render('login.ejs');
    },
    authenticate: (req, res) => { 
        // si existe el mail
        res.send(req.body);
        //const user = 
    }
}

module.exports = usuariosController;