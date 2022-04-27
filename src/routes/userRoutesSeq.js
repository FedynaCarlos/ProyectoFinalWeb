/* ROUTER DE USUARIOS*/

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/userControllers');
const validationUsers = require('../middlewares/validationUsers');
const userLogin = require('../middlewares/userLogin');
const multer = require('multer');
const path = require('path');
const userControllersSeq = require('../controllers/userControllersSeq');
const multer = require('multer');

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

/*
router.get('/', userLoginAdmin, controllerAdminSeq.index);

router.get('/create', controllerAdminSeq.create);
router.post('/create', upload.single('image'), controllerAdminSeq.save);
router.get('/detail/:id', controllerAdminSeq.show);
router.get('/edit/:id', controllerAdminSeq.edit);
router.put('/edit/:id', upload.single('image'), controllerAdminSeq.update);
router.get('/delete/:id', controllerAdminSeq.destroy);
router.get('/search_results', controllerAdminSeq.search);
 */

router.get('/register', userLogin, usuariosController.register);
router.post('/',upload.single('image'), validationUsers, usuariosController.processRegister);

router.get('/login', userLogin, usuariosController.login);
router.post('/login', usuariosController.authenticate);

router.get('/logout', usuariosController.logout);


module.exports = router;