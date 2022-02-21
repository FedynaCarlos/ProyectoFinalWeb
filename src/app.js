const express = require('express');
const methodOverride =  require('method-override');

const app = express();

app.use(express.static('./public'));
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//Requerir las rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const res = require('express/lib/response');

// middlewares
app.use(methodOverride('_method'));


//Rutas a usar
app.use('/',mainRoutes);
app.use('/user',userRoutes);
app.use('/productos',productRoutes);
app.use('/about',mainRoutes);

//Levantar servidor
app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});
// error 404
app.use(function(req,res,next) {
    res.status(404).render('not-found');
});
