function userlogin(req, res, next) {
    if(req.session.userlogeado){
        return res.redirect('/')
    }
    next();
}

module.exports = userlogin;