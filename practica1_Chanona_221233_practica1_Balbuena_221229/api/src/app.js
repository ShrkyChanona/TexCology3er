const express = require('express') //importando el modulo
const config = require('./config')
const texcology = require('./rutas')
const app = express(); //funcion del modulo express

//configuracion
app.set('port', config.app.port) //estableciendo el puerto 4000

// rutas
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    next();
  });
app.use('/api/texcology', texcology)
module.exports = app;