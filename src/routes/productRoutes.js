const express = require('express');
const router = express.Router();
const pController = require('../controllers/productControllers');
const validationCreate = require('../middlewares/validation');
const multer = require('multer');
const path = require('path');

//multer para imagenes

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

/*** GET ALL PRODUCTS ***/ 
//router.get('/', productsController.index); 
// fin


router.get('/',pController.productos);
router.get('/productosPrincipal',pController.productosPrincipal)

/*** CREAR UN PRODUCTO ***/ 

router.get('/createProduct',pController.crear);
router.post('/', upload.single('image'),validationCreate, pController.almacenar); 


//CREAR UN USUARIO
router.get('/createUsuario',pController.crear);
router.post('/', upload.single('image'),validationCreate, pController.almacenar); 

router.get('/productCart',pController.productCart);





module.exports = router;

