import { string } from "postcss-selector-parser";

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const exerciseSchema = new Schema({ //on crée un schema pour le username
    username: { type: string, required: true },
    description: { type: string, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
        timestamps: true
})

const Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;