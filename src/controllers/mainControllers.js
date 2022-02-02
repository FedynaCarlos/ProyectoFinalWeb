const controller ={
    index: (req,res) => {
        return res.render('index');
    },
    login: (req,res) => {
        return res.render('login.ejs');
    }
}

module.exports = controller;