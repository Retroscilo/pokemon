const mongoose = require('mongoose');

const favoriSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
})

const Favori = mongoose.model('Favori', favoriSchema);

module.exports = Favori;