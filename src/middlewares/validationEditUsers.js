const path = require("path");
const { check } = require("express-validator");

const validationEditUsers = [
  check("nombres")
    .notEmpty()
    .withMessage("El nombre no puede estar vacio")
    .bail()
    .isString()
    .withMessage("Debe ser un campo alfanumerico")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Debe tener como minimo 5 caracteres")
    .bail(),

  check("apellidos")
    .notEmpty()
    .withMessage("El apellido no puede estar vacio")
    .bail()
    .isString()
    .withMessage("Debe ser un campo alfanumerico")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Debe tener como minimo 5 caracteres")
    .bail(),

  check("perfil")
    .notEmpty()
    .withMessage("El perfil no puede estar vacio")
    .bail(),

  check("telefono")
    .notEmpty()
    .withMessage('No puede estar vacio')
    .bail()
    .isNumeric()
    .withMessage('Debe ingresar un numero valido')
    .bail(),

    check('email')
    .notEmpty().
    withMessage('No puede estar vacio')
    .bail()
    .isEmail()
    .withMessage('Debe ser un campo Email')
    .bail(),
  
  check('fechaNac')
    .notEmpty()
    .withMessage('No puede estar vacio')
    .bail()
    .isDate()
    .withMessage('Debe ingresar una fecha valida')
    .bail(),

  /*check("avatar").custom((value, { req }) => {
    let file = req.file;
    let trueExtension = [".jpg", ".png", ".gif", ".jpeg"];

    if (!file) {
      throw new Error("Debes subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!trueExtension.includes(fileExtension)) {
        throw new Error(
          `Las extensiones permitidas son ${trueExtension.join(", ")}`
        );
      }
    }
    return true;
  }),*/
  
];

module.exports = validationEditUsers;
