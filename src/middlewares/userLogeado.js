function userLogeado(req, res, next) {
    res.locals.isLogged = false;
    
    if (req.session && req.session.userLogeado) {
        res.locals.isLogged = true;
    }

    next();
}
module.exports = userLogeado;