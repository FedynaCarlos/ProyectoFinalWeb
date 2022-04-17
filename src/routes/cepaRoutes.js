const express = require('express');
const router = express.Router();
const cepaController = require("../controllers/cepaController");

router.get('/', cepaController.list);

module.exports = router;