const express = require('express');
const router = express.Router();
const uController = require('../controllers/usersControllers');
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


router.get('/',uController.Users);
router.get('usuariosPrincipal',uController.usuariosPrincipal)

/*** CREAR UN PRODUCTO ***/ 

router.get('/createUsers',uController.crear);
router.post('/', upload.single('image'),validationCreate, uController.almacenar); 





module.exports = router;

