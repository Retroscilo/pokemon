const Favori = require('../models/Favori.model')
const Comment = require("../models/Comment.model")

const index = async (req, res) => { // Récupérer les users et les afficher dans la vue
    const {name} = req.params
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await data.json()
    const isFavori = await Favori.find({name})
    const commentary = await Comment.findOne({name})

    res.render("pokemon", {pokemon, isFavori: isFavori.length > 0, c: commentary?.comment || ""})
}

const create = async (req, res) => { // Créer un user
    const {name} = req.params
    await Favori.create({name})

    return res.status(200).send("OK")
}

const comment = async (req, res) => {
    const {comment} = req.body
    const {name} = req.params
    const result = await Comment.findOneAndUpdate({name}, {comment})
    if(!result) {
        await Comment.create({name, comment})
        return res.status(200).send("OK")
    }
    res.status(200).send("OK")
}

const deleteUser = async (req, res) => { // Supprimer un user par son id
    const {name} = req.params

    await Favori.deleteMany({name})

    return res.status(200).send("OK")
}

const fav = async (req, res) => {
    const Favs = await Favori.find()
    console.log(Favs)

    res.render("fav", {Favs})
}

module.exports = { // Exporter les méthodes
    index,
    create,
    deleteUser,
    comment,
    fav
}