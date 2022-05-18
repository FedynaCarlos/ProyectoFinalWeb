const express = require('express');
const router2 = express.Router();
const controller2 = require('../controllers/apiControllerUsuario');

router2.get('/',controller2.list);
router2.get('/:id',controller2.show);
router2.post('/',controller2.store);
router2.delete('/:id',controller2.delete);

module.exports = router2;