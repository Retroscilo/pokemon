const User = require('../models/userModel');
const Favori = require('../models/Favori.model')

const index = async (req, res) => { // Récupérer les users et les afficher dans la vue
    const {name} = req.params
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await data.json()
    const isFavori = await Favori.find({name})
    res.render("pokemon", {pokemon, isFavori: isFavori.length > 0})
}

const create = async (req, res) => { // Créer un user
    const { name } =  req.params
    await Favori.create({name})

    return res.status(200).send("OK")
}

const deleteUser = async (req, res) => { // Supprimer un user par son id
    const { name } =  req.params

   await Favori.deleteMany({name})

    return res.status(200).send("OK")
}

module.exports = { // Exporter les méthodes
    index,
    create,
    deleteUser,
}