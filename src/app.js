const express = require('express');

const app = express();

app.use(express.static('./public'));
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//Requerir las rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

//Rutas a usar
app.use('/',mainRoutes);
app.use('/user',userRoutes);
app.use('/productos',productRoutes);
app.use('/about',mainRoutes);

//Levantar servidor
app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});

