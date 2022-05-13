//const User = require('../models/User')
const db = require('../database/models');
const Usuario = require('../database/models/Usuario');



async function userLogeadoMiddlewares(req, res, next) {
    res.locals.isLogged = false;
    
    let cookieEmail = req.cookies.userMail;
    console.log('en el middleware '+cookieEmail)
    
    if (cookieEmail){ console.log('entro al if')
     var cookieUser = await db.Usuario.findOne({limit:1,
            where : {
            email: (cookieEmail)
            }
          })
            
          req.session.userLogeado = cookieUser;
                   
    }

    if (req.session.userLogeado) {
        res.locals.isLogged = true;
    
    res.locals.userLogeado = req.session.userLogeado;
    }
    
    next();
}
module.exports = userLogeadoMiddlewares;