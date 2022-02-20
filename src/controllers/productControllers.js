const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const pController ={
    productos: (req,res) => {
        res.render('productDetail');
    },
    productosPrincipal: (req,res)=>{
        res.render('products');
    },
    productCart: (req,res) => {
        res.render('productCart');
    },  
    /*formulario de creacion*/

    crear: (req,res) =>{
        res.render('createProduct')
    },

    	// Create -  Method to store
	almacenar: (req, res) => {

        const errors = validationResult(req);
		

		if (!errors.isEmpty()) {
            return res.render('createProduct', { errors: errors.mapped(), old: req.body })
			
		}else{

			let image
			if(req.file != undefined){
				image = req.file.filename
			} else {
				image = 'default-image.png'
			}
			
			let nuevoProducto = {
				id: productos[productos.length - 1].id + 1,
				...req.body,
				image

			};
			 let productoNuevo = [...productos, nuevoProducto]
			fs.writeFileSync(productsFilePath, JSON.stringify(productoNuevo, null, ' '));
			res.redirect('/');
		}

	}
};

module.exports = pController;
