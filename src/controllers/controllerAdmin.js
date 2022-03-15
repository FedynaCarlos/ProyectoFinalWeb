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
      res.render('editProduct', { productosEditar });
    },
    update: (req,res) => {
      req.body.id = req.params.id;
      req.body.image = req.file ? req.file.name : req.body.oldImagen;
      let productosUpdate = productos.map(producto => {
        if (producto.id == req.body.id){
          return producto = req.body;
        }
        return producto;
      })
      let productoActualizar = JSON.stringify(productosUpdate, null, 2);
      fs.writeFileSync(productsFilePath, productoActualizar)
      res.redirect('/administrar');
    },
    destroy: (req, res) => {
      const productoDeletId = req.params.id;
      const productosFinal = productos.filter(producto => producto.id != productoDeletId);
      let productoGuardar = JSON.stringify(productosFinal, null, 2);
      fs.writeFileSync(productsFilePath, productoGuardar);
      res.redirect('/administrar');
    }
}
 
module.exports = controllerAdmin;