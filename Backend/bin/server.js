const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const indexRoutes = express.Router(); 
const usuariosRoutes = express.Router(); 
const dadosRoutes = express.Router();
const PORT = 4000;

//carrega os models
const Usuarios =  require('./models/Model-Usuario');
const Dados =  require('./models/Model-Dados');



app.use(cors());
app.use(bodyParser.json());

mongoose.connect('colocar a connection string aqui para conectar com banco', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
}) 
  



app.use('/', indexRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/dados', dadosRoutes);

app.listen(PORT, async function() {
    console.log("Server is running on Port: " + PORT);
});