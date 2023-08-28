const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const fs = require('fs');

//configuracion de archivos estaticos
app.use(express.static(path.join(__dirname, '../public')));
//configuracion de motor de vistas de ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//importando rutas
const mainRouter = require('./routes/main.routes');
const moviesRouter = require('./routes/movies.routes');

//rutas
app.use('/', mainRouter);
app.use('/movies', moviesRouter);

app.listen(PORT, () => console.log('Servidor escuchando en el puerto 5000'));
