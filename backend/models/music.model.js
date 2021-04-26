const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const musicSchema = new Schema({ //on crée un schema pour le username
    nom: { type: String, required: true },
    artiste: { type: String, required: true },
    genre: { type: String, required: true },
    url: { type: String, required: true },
    auteur: { type: String, required: true },
    date: { type: Date, required: true },
}, {
        timestamps: true
})

const Music = mongoose.model('music', musicSchema);

module.exports = Music;