const path = require('path');
const {check} = require('express-validator');

const validationUsers = [

    check('nombres').notEmpty().withMessage('debes escribir un nombre válido').bail().isString().withMessage('Debe ser un campo alfanumerico').bail(),
    check('apellidos').notEmpty().withMessage('No puede estar vacio').bail().isString().withMessage('Debe ser un campo alfanumerico').bail(),
    check('email').notEmpty().withMessage('No puede estar vacio').bail().isEmail().withMessage('Debe ser un campo Email').bail(),
    check('fechaNacimiento').notEmpty().withMessage('No puede estar vacio').bail().isDate().withMessage('Debe ingresar una fecha valida').bail(),
    check('telefono').notEmpty().withMessage('No puede estar vacio').bail().isNumeric().withMessage('Debe ingresar un numero valido').bail(),
    // chequeo que la imagen este y sea de un formato especifico
    check('image').custom((value, { req })=>{
        let file = req.file;
        let trueExtension = ['.jpg','.png','.gif','.jpeg'];
         
        if (!file){
            throw new Error('Debes subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!trueExtension.includes(fileExtension)){
                throw new Error(`Las extensiones permitidas son ${trueExtension.join(', ')}`);
            }
        };
            return true;
    }),
    check('password').notEmpty().withMessage('No puede estar vacio').bail().isLength({ min: 5, max: 10 }).withMessage('Debe tener como minimo 5 y maximo 10 caracteres').bail(),
    check('cpassword').notEmpty().withMessage('No puede estar vacio').bail().isLength({ min: 5, max: 10 }).withMessage('Debe tener como minimo 5 y maximo 10 caracteres').bail(),
    check('cpassword', 'Los Passwords no son iguales').custom((value, {req}) => (value === req.body.password)),
]

module.exports = validationUsers
