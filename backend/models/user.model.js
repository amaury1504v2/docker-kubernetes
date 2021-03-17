import { string } from "postcss-selector-parser";

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const userSchema = new Schema({ //on crée un schema pour le username
    username: {
        type: string,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
        timestamps: true
})

const User = mongoose.model('user', userSchema);

module.exports = User;