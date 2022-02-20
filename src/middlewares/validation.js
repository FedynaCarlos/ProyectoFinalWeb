
const {check} = require('express-validator');

const validationCreate = [

    check('nombre').notEmpty().withMessage('No puede estar vacio').bail().isString().withMessage('Debe ser un campo alfanumerico').bail(),
    check('precio').isNumeric().withMessage('No puede estar vacio').bail().isNumeric().withMessage('Debe ser un campo numerico').bail(),
    check('cepa').notEmpty().withMessage('No puede estar vacio').bail(),
    check('categoria').notEmpty().withMessage('No puede estar vacio').bail(),
    check('descripcion').notEmpty().withMessage('No puede estar vacio').bail().isLength({ min: 0, max: 100 }).withMessage('Debe tener como maxim 100 caracteres').bail(),

]

module.exports = validationCreate