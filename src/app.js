const express = require('express');

const app = express();

app.use(express.static('../public'));

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
app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

