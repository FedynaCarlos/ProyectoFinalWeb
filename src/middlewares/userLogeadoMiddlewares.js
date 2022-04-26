const User = require('../models/User')



function userLogeadoMiddlewares(req, res, next) {
    res.locals.isLogged = false;

    let cookieEmail = req.cookies.userMail;
    let cookieUser = User.findByField('email', cookieEmail)

    if (cookieUser){
        req.session.userLogeado = cookieUser;
    }
    if (req.session.userLogeado) {
        res.locals.isLogged = true;
        
        res.locals.userLogeado = req.session.userLogeado;
        
    }

    next();
}
module.exports = userLogeadoMiddlewares;