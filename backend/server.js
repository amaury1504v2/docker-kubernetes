const express = require('express');
const cors = require ('cors'); // cross origin ressource sharing
const mongoose = require ('mongoose');
mongoose.set('useNewUrlParser', true);

require('dotenv').config(); //permet de faire en sorte qu'on puisse configurer 
//les variables d'environement dans le fichier dotenv

const app = express(); //création du serveur express
const port = process.env.PORT || 5000; //port du serveur

app.use(cors()); //cors middleware
app.use(express.json()); //ce qui permet de parser (analyser des strings de symboles) du JSON

const uri = process.env.ATLAS_URI; //séquence de caractères uniques qui identifient une ressource logique ou physique
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }); //permet de parser des nouveaux strings de connection MongoDB
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const musicRouter = require('./routes/music');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.use('/music', musicRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})