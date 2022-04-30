const path = require('path');
const { devNull } = require('os');
const db = require('../../src/database/models');
const res = require('express/lib/response');
const { validationResult } = require("express-validator");

const Op = db.Sequelize.Op;

const controllerAdminSeq = {
   index: (req,res) =>{ 
    db.Producto.findAll()
      .then(function(productos){ 
        res.render('listProducts', {productos});
      })
      .catch(error => res.send(error))
   },
   create: (req,res) => {
    const valores = req.body;
    db.Cepa.findAll()
      .then(function(cepas){
        res.render("createProduct", {cepas,valores});
      })
   },
  save: (req,res) => {
    
    const errors= validationResult(req);
    if (!errors.isEmpty()){
      return (     
      db.Cepa.findAll()
        .then (function(cepas){
          res.render('createProduct', {errors:errors.mapped(), oldData:req.body, cepas})
        }))
    } else {
      db.Producto.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
        cepa_id: req.body.cepa,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        imagen: req.file.filename,
      })
        .then((vinos) => {
          res.redirect("/administrar");
        })
        .catch((error) => res.send(error));
    }
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
        
    .then(function(resultado){
      res.render('listProducts', {productos : resultado}); })
    .catch(error => res.send(error))
  }
 
}



module.exports = controllerAdminSeq;
