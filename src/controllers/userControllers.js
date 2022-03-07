const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
            let usuarioNuevo = [...usuarios, nuevoUser]
            fs.writeFileSync(usersFilePath, JSON.stringify(usuarioNuevo, null, ''));
            res.redirect('/');
        }
    },
    login:(req,res)=> {
        res.render('login.ejs');
    }
}

module.exports = usuariosController;