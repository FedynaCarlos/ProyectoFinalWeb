const fs = require('fs');

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
    crear: (req,res) =>{
        res.render('createProduct')
    }
};

module.exports = pController;


