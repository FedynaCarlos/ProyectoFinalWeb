function userLogeado(req, res, next) {
    res.locals.isLogged = false;
    
    if (req.session.userLogeado) {
        res.locals.isLogged = true;
        
        res.locals.userLogeado = req.session.userLogeado;
        //console.log(req.session.userLogeado);
    }

    next();
}
module.exports = userLogeado;