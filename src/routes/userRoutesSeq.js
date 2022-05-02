/* ROUTER DE USUARIOS*/

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const validationUsers = require('../middlewares/validationUsers');
const userLogin = require('../middlewares/userLogin');
const multer = require('multer');
const path = require('path');
const userControllersSeq = require('../controllers/userControllersSeq');


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


router.get('/', userLogin, userControllersSeq.index);

router.get('/create', userControllersSeq.create);
router.post('/create', upload.single('image'), userControllersSeq.save);
router.get('/detail/:id', userControllersSeq.show);
router.get('/edit/:id', userControllersSeq.edit);
router.put('/edit/:id', upload.single('image'), userControllersSeq.update);
router.get('/delete/:id', userControllersSeq.destroy);
router.get('/search_results', userControllersSeq.search);


router.get('/register', userLogin, userControllersSeq.register);
router.post('/',upload.single('image'), validationUsers, userControllersSeq.processRegister);

router.get('/login', userLogin, userControllersSeq.login);
router.post('/login', userControllersSeq.authenticate);

router.get('/logout', userControllersSeq.logout);


module.exports = router;