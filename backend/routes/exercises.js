const router = require('express').Router(); 
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find() //méthode mongoose qui permet d'obtenir une liste de tous les exercices de la bdd mongoose atlas
        .then(exercises => res.json(exercises)) //on va obtenir tous les exercices sous le format json
        .catch(err => res.status(400).json('Error: ' + err)) //s'il y a une erreur, retourner Error + err
});

router.route('/add').post((req, res) => { //s'occupe des requêtes post (d'où l'URL add)
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({ //on instancie l'exercice
        username,
        description,
        duration,
        date,
    });

    newExercise.save() //on enregistre l'exercice
    .then(() => escape.json('Exercise Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;