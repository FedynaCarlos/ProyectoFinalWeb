/* ROUTER DE USUARIOS*/

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const validationUsers = require('../middlewares/validationUsers');
const userLogin = require('../middlewares/userLogin');
const multer = require('multer');
const path = require('path');
const userControllersAdmSeq = require('../controllers/userControllersAdmSeq');
const userControllersLoginSeq = require('../controllers/userControllersLoginSeq');


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


router.get('/', userLogin, userControllersAdmSeq.index);

router.get('/create', userControllersAdmSeq.create);
router.post('/create', upload.single('image'), userControllersAdmSeq.save);
router.get('/detail/:id', userControllersAdmSeq.show);
router.get('/edit/:id', userControllersAdmSeq.edit);
router.put('/edit/:id', upload.single('image'), userControllersAdmSeq.update);
router.get('/delete/:id', userControllersAdmSeq.destroy);
router.get('/search_results', userControllersAdmSeq.search);

/*
router.get('/register', userLogin, userControllersLoginSeq.register);
router.post('/',upload.single('image'), validationUsers, userControllersLoginSeq.processRegister);
*/
router.get('/login', userLogin, userControllersLoginSeq.login);
router.post('/login', userControllersLoginSeq.authenticate);

router.get('/logout', userControllersLoginSeq.logout);


module.exports = router;