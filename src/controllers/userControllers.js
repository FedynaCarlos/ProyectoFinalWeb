const controller = {
    register: (req,res) => {
        return res.render('register.ejs');
    }
    /*login:(req,res)=> {
        return res.render('login.ejs');
    }*/
}

module.exports = controller;