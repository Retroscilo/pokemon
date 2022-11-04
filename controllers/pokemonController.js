const User = require('../models/userModel');

const index = async (req, res) => { // Récupérer les users et les afficher dans la vue
    const {name} = req.params
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await data.json()
    res.render("pokemon", {pokemon, addFavori: () => console.log("favori")})
}

const create = (req, res) => { // Créer un user
    const { id } =  req.body

    User.create({ name, age, city })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => res.status(500).json(err))
}

const deleteUser = (req, res) => { // Supprimer un user par son id
    const {id} = req.params

    User.findByIdAndDelete(id, (err, user) => {
        if (err) res.status(500).json({err, message: "Unable to delete user"}) // Si erreur, renvoyer un code 500 et l'erreur
        if (user === null) res.status(404).json({message: "user not found"}) // Si pas de user, renvoyer un code 404 et un message
        else res.status(200).json({message: "user deleted", user})
    })
}

module.exports = { // Exporter les méthodes
    index,
    create,
    deleteUser,
}