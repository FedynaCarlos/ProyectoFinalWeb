const express = require('express');

const app = express();

app.use(express.static('../public'));

app.set('view engine','ejs');

const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/',mainRoutes);
app.use('/register',userRoutes);
app.use('/login',mainRoutes);

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

/*
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});
app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});*/