
const DB = require('../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        DB.Producto
        .findAll()
        .then(productos =>{
            return res.json({
                total: productos.length,
                prueba: productos,
                status: 200
            })
        })
    },
    show: (req,res)=>{
        DB.Producto
           .findByPk(req.params.id)
           .then(producto=>{
               return res.status(200).json({
                   data: producto,
                   status:200
               })
           })
    },
    store: (req,res)=> {
        DB.Producto
           .create(req.body)
           .then(producto => {
               return res.status(200).json({
                   data: producto,
                   status: 200
               })
           })
    },
    delete:(req,res)=>{
        DB.Producto
           .destroy({
               where: {
                   id: req.params.id
               }
           })
            .then((response)=>{
                return res.json(response)
            })
    }
}; 
