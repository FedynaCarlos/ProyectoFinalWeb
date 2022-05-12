const express = require('express');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const bodyParser = require('body-parser');
//const bootstrap = require("bootstrap");

//const userlogeado = require('./middlewares/userLogeado');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//Requerir las rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutesSeq');
const productRoutes = require('./routes/productRoutes');
const cepaRoutes = require('./routes/cepaRoutes');
//const adminRoutes = require('./routes/adminRoutes'); --  deshabilito mientras configuro el sequelize ---- 
const adminRoutes = require('./routes/adminRoutesSeq');


const res = require('express/lib/response');
const userLogeadoMiddlewares = require('./middlewares/userLogeadoMiddlewares');

// middlewares
app.use(methodOverride('_method'));


//variable Session y cookies
app.use(session({
    secret: 'Es un secreto',
    resave : false,
    saveUninitialized: false,
}));

app.use(cookies());
app.use(userLogeadoMiddlewares);

//Rutas a usar
app.use('/',mainRoutes);
app.use('/user',userRoutes);
app.use('/admUsuarios',userRoutes);
app.use('/productos',productRoutes);
app.use('/cepa',cepaRoutes);
app.use('/about',mainRoutes);
app.use('/prueba',mainRoutes);
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
