const path = require('path');
const fs = require('fs');
const { json } = require('express');
const { dirname } = require('path/posix');
const productsFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

const controllerAdmin = {
    index: (req,res) =>{
      res.render('listProducts',{ productos });
    },
    create: (req,res) => {
      res.render('createProduct');
    },
    save: (req,res) => {
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
			res.redirect('/administrar');
		}
	},
    show: (req,res) => {
      let miProducto;
      productos.forEach(producto => {
        if(producto.id == req.params.id){
          miProducto = producto;
        }
      });
      res.render('detail', {miProducto});
    },
    edit: (req,res) => {
      const productoId = req.params.id;
      let productosEditar = productos.find(producto => producto.id == productoId);
      res.render('editProduct', { productosEditar })
    }
}

module.exports = controllerAdmin;