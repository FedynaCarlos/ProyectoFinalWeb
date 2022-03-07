const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/userControllers');
const multer = require('multer');
const path = require('path');

//multer para imagenes

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/users')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage})



router.get('/register', usuariosController.register);
router.post('/',upload.single('image'), usuariosController.create);
router.get('/login',usuariosController.login);


module.exports = router;