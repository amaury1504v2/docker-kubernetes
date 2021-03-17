const router = require('express').Router(); 
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find() //méthode mongoose qui permet d'obtenir une liste de tous les utilisateurs de la bdd mongoose atlas
        .then(users => res.json(users)) //on va obtenir tous les utilisateurs sous le format json
        .catch(err => res.status(400).json('Error: ' + err)) //s'il y a une erreur, retourner Error + err
});

router.route('/add').post((req, res) => { //s'occupe des requêtes post (d'où l'URL add)
    const username = req.body.username;

    const newUser = new User ({username}) //on crée une instance de User en utilisant username

    newUser.save() //on enregistre le nouvel utilisateur
        .then(()=> res.json('User added!')) 
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;