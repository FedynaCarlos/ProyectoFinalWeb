/* ROUTER DE USUARIOS*/

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const validationUsers = require('../middlewares/validationUsers');
const validationEditUsers = require('../middlewares/validationEditUsers');
const userLogin = require('../middlewares/userLogin');
const multer = require('multer');
const path = require('path');
const userControllersAdmSeq = require('../controllers/userControllersAdmSeq');
const userControllersLoginSeq = require('../controllers/userControllersLoginSeq');
const userLoginAdmin = require('../middlewares/userLoginAdmin');


//multer para imagenes

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/users')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})


router.get('/', userLoginAdmin, userControllersAdmSeq.index);

router.get('/create', userControllersAdmSeq.create);
router.post('/create', upload.single('avatar'), userControllersAdmSeq.save);
router.get('/detail/:id', userControllersAdmSeq.show);
router.get('/edit/:id', userControllersAdmSeq.edit);
router.put('/edit/:id',  upload.single('avatar'),validationEditUsers, userControllersAdmSeq.update);
router.get('/delete/:id', userControllersAdmSeq.destroy);
router.get('/search_results', userControllersAdmSeq.search);

router.get('/register',  userControllersLoginSeq.register);
router.post('/',upload.single('avatar'), validationUsers, userControllersLoginSeq.processRegister);

router.get('/login', userLogin, userControllersLoginSeq.login);
router.post('/login', userControllersLoginSeq.authenticate);

router.get('/logout', userControllersLoginSeq.logout);


module.exports = router;