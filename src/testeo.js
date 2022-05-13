let bcrypt = require('bcryptjs')

let clave = bcrypt.hash('123456',10)

console.log(clave)