const fs = require('fs');

const principalController ={
    index: (req,res) => {
         res.render('index');
    },
    about: (req,res) => {
        res.render('about');
    }
};

module.exports = principalController;