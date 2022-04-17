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
const cepaRoutes = require('./routes/cepaRoutes');
//const adminRoutes = require('./routes/adminRoutes'); --  deshabilito mientras configuro el sequelize ---- 
const adminRoutes = require('./routes/adminRoutesSeq');


const res = require('express/lib/response');

// middlewares
app.use(methodOverride('_method'));


//Rutas a usar
app.use('/',mainRoutes);
app.use('/user',userRoutes);
app.use('/productos',productRoutes);
app.use('/cepa',cepaRoutes);
app.use('/about',mainRoutes);
app.use('/administrar',adminRoutes);

//Levantar servidor
const puerto = 3030;
app.listen(puerto, ()=>{
    console.log('Servidor funcionando en el puerto ' + puerto);
});
// error 404
app.use(function(req,res,next) {
    res.status(404).render('not-found');
});
