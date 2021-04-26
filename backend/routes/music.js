const router = require("express").Router();
let Music = require("../models/music.model");

router.route("/").get((req, res) => {
  Music.find() //méthode mongoose qui permet d'obtenir une liste de tous les exercices de la bdd mongoose atlas
    .then((music) => res.json(music)) //on va obtenir tous les exercices sous le format json
    .catch((err) => res.status(400).json("Error: " + err)); //s'il y a une erreur, retourner Error + err
});

router.route("/add").post((req, res) => {
  //s'occupe des requêtes post (d'où l'URL add)
  const nom = req.body.nom;
  const artiste = req.body.artiste;
  const genre = req.body.genre;
  const url = req.body.url;
  const auteur = req.body.auteur;
  const date = Date.parse(req.body.date);

  const newMusic = new Music({
    //on instancie l'exercice
    nom,
    artiste,
    genre,
    auteur,
    url,
    date,
  });

  newMusic
    .save() //on enregistre l'exercice
    .then(() => escape.json('Music Added!'))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  // /:id= object id créé par mongodb
  Music.findById(req.params.id) // prend l'id de l'url au-dessus
    .then((exercise) => res.json(exercise)) //ensuite, on retourne l'exercice
    .catch((err) => res.status(400).json("Error" + err)); // sinon, on retourne l'erreur
});

router.route("/:id").delete((req, res) => {
  Music.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
