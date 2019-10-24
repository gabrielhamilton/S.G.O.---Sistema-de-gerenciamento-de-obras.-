'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app =  express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb://localhost');

//carrega os models
const Usuarios =  require('./models/Model-Usuario');
const Dados =  require('./models/Model-Dados');

//carrega as Rotas
const indexRoutes = require('./routes/index');
const usuariosRoutes = require('./routes/Routes-Usuarios');
const dadosRoutes = require('./routes/Routes-Dados');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));




app.use('/', indexRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/dados', dadosRoutes);


module.exports = app;