const path = require("path");
const { check } = require("express-validator");

const validationCreate = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre no puede estar vacio")
    .bail()
    .isString()
    .withMessage("Debe ser un campo alfanumerico")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Debe tener como minimo 5 caracteres")
    .bail(),
  check("precio")
    .isNumeric()
    .withMessage("El precio no puede estar vacio")
    .bail()
    .isNumeric()
    .withMessage("Debe ser un campo numerico")
    .bail(),
  check("cepa").notEmpty().withMessage("La cepa no puede estar vacio").bail(),
  check("categoria")
    .notEmpty()
    .withMessage("La Categoria no puede estar vacia")
    .bail(),
  check("image").custom((value, { req }) => {
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
  }),
  check("descripcion")
    .notEmpty()
    .withMessage("La descripción no puede estar vacio")
    .bail()
    .isLength({ min: 20 })
    .withMessage("Debe tener como minimo 20 caracteres")
    .bail(),
];

module.exports = validationCreate;
