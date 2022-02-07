const pController ={
    productos: (req,res) => {
        res.render('productDetail');
    },
    productCart: (req,res) => {
        res.render('productCart');
    },  
    crear: (req,res) =>{
        res.render('createProduct')
    }
};

module.exports = pController;


