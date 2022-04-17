const db = require('../../src/database/models');

const cepaController = {
  'list': function(req,res){
      db.Cepa.findAll()
        .then(function(cepas){
          res.render("cepa", {cepas:cepas});
        })
  }
}

module.exports = cepaController;