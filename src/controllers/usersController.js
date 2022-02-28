const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const uController ={
    productos: (req,res) => {
        res.render('createUsers');
    },
    
	usuariosPrincipal: (req,res)=>{
        res.render('Users');
    },
    /*formulario de creacion*/
	
    crear: (req,res) =>{
        res.render('createUsers')
    },


    	// Create -  Method to store
	almacenar: (req, res) => {

        const errors = validationResult(req);
		

		if (!errors.isEmpty()) {
            return res.render('createUsers', { errors: errors.mapped(), old: req.body })
			
		}else{

			let image
			if(req.file != undefined){
				image = req.file.filename
			} else {
				image = 'default-image.png'
			}
			
			let nuevoUsuario = {
				id: usuarios[usuarios.length - 1].id + 1,
				...req.body,
				image

			};
			 let nuevoUsuario = [...usuarios, nuevoUsuario]
			fs.writeFileSync(usersFilePath, JSON.stringify(usuarioNuevo, null, ' '));
			res.redirect('/');
		}

	}
};

module.exports = uController;
