const DB = require("../database/models");
const Op = DB.Sequelize.Op;

module.exports = {
  list: (req, res) => {
    DB.Cepa.findAll().then((cepas) => {
      return res.json({
        total: cepas.length,
        data: cepas,
        status: 200,
      });
    });
  },
  show: (req, res) => {
    DB.Cepa.findByPk(req.params.id).then((cepas) => {
      return res.status(200).json({
        data: cepas,
        status: 200,
      });
    });
  },
  store: (req, res) => {
    DB.Cepa.create(req.body).then((cepas) => {
      return res.status(200).json({
        data: cepas,
        status: 200,
      });
    });
  },
  delete: (req, res) => {
    DB.Cepa.destroy({
      where: {
        id: req.params.id,
      },
    }).then((response) => {
      return res.json(response);
    });
  },
};
