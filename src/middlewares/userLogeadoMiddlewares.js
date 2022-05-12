//const User = require('../models/User')
const db = require('../database/models');
const Usuario = require('../database/models/Usuario');



function userLogeadoMiddlewares(req, res, next) {
    res.locals.isLogged = false;
    console.log(req.cookies)
    let cookieEmail = req.cookies.userMail;
    //let cookieUser = User.findByPk('email', cookieEmail)
    if (cookieEmail){
         db.Usuario.findOne({limit:1,
            where : {
            email: (cookieEmail)
            }
          })
        .then((cookieUser) => {  
             req.session.userLogeado = cookieUser;
    
        })

       
        .catch(error => res.send(error))
    }

    if (req.session.userLogeado) {
        res.locals.isLogged = true;
    
    res.locals.userLogeado = req.session.userLogeado;
    }
    
    next();
}
module.exports = userLogeadoMiddlewares;