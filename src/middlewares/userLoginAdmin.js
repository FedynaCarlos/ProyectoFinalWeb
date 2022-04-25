function userLoginAdmin(req, res, next) {
    
    if(!req.session.userLogeado){
        return res.redirect('/')
    }
    next();
}

module.exports = userLoginAdmin;