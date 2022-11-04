const mongoose = require('mongoose');

const favoriSchema = new mongoose.Schema({
    name: String,
})

const Favori = mongoose.model('Favori', favoriSchema);

module.exports = Favori;