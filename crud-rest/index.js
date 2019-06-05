const express = require('express');
const app = express();

//MIDDLEWARES
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev')); // le pasamos en que entorno estamos
app.use(bodyParser.json());//entneder los datos que me envia el servidor en formato json
app.use(bodyParser.urlencoded({ extended: false} )); //entender datos que llegan desde un formulario

//SETTINGS
app.set('json spaces', 4 ) //agrega un espaciado 

//ROUTES
let productsRoutes =  require('./routes/products');
app.use('/products/', productsRoutes);

//STATIC FILES
//START SERVER
app.listen(3000, () => { 
    console.log('server on port 3000');

})