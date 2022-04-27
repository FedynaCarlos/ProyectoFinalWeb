const { Router } = require('express');
const express = require('express');
const router = express.Router();
const controllerAdmin = require('../controllers/controllerAdmin');
const multer = require('multer');
const controllerAdminPrueba = require('../controllers/controllerAdmin');
const userLogout = require('../middlewares/userLogout')

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})


router.get('/', userLogout, controllerAdmin.index);
router.get('/create', controllerAdmin.create);
router.post('/create', upload.single('image'), controllerAdmin.save);
router.get('/detail/:id', controllerAdmin.show);
router.get('/productDetail/:id', controllerAdminPrueba.show);
router.get('/edit/:id', controllerAdmin.edit);
router.put('/edit/:id', upload.single('image'), controllerAdmin.update);
router.get('/delete/:id', controllerAdmin.destroy);

module.exports = router;
