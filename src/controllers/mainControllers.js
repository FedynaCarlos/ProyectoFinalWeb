const fs = require('fs');

const principalController ={
    index: (req,res) => {
         res.render('index');
    },
    about: (req,res) => {
        res.render('about');
    },
    //agrego paco prueba
    contact: (req,res) => {
        res.render('contacto');
    }
};

module.exports = principalController;