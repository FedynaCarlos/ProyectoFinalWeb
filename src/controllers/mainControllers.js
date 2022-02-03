const controller ={
    index: (req,res) => {
        return res.render('index');
    },
    login: (req,res) => {
        return res.render('login.ejs');
    },
    register: (req,res) => {
        return res.render('register.ejs');
    }
}

module.exports = controller;