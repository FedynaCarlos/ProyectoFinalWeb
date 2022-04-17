const { devNull } = require('os');
const db = require('../../src/database/models');

const controllerAdminSeq = {
   index: (req,res) =>{
    db.Producto.findAll()
      .then(function(productos){
        res.render('listProducts', {productos});
      })
   }
}

module.exports = controllerAdminSeq;