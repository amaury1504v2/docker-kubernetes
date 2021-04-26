const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const userSchema = new Schema({ //on crée un schema pour le username
    username: {
        type: String,
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