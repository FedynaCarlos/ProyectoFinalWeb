function userLogout(req, res, next) {
    
    if(!req.session.userlogeado){
      
        return res.redirect('/user/login')
    }
    next();
}

module.exports = userLogout;