const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const db = require('../../src/database/models');

const pController ={
    productos: (req,res) => {
			db.Producto.findAll({
				include : [{association : 'cepa'}]
			})
			.then(function(productos){
        
				res.render('productDetail',{productos});
			})
			.catch(error => res.send(error))
    },
		productCart: (req,res) => {
			res.render("productCart");
		}
};

module.exports = pController;
