
const DB = require('../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        DB.Usuario
        .findAll()
        .then(usuarios =>{
            return res.json({
                total: usuarios.length,
                prueba: usuarios,
                status: 200
            })
        })
    },
    show: (req,res)=>{
        DB.Usuario
           .findByPk(req.params.id)
           .then(usuarios=>{
               return res.status(200).json({
                   data: usuarios,
                   status:200
               })

           })

    },
    store: (req,res)=> {
        DB.Usuario
           .create(req.body)
           .then(usuarios => {
               return res.status(200).json({ 
                   data: usuarios,
                   status: 200
               })
           })
    },
    delete:(req,res)=>{
        DB.Usuario
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