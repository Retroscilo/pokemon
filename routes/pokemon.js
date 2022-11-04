var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Toutes les routes users commence par /users (voir app.js ligne 8)

router.get("/favoris", pokemonController.fav)
router.get('/:name', pokemonController.index);
router.post('/:name', pokemonController.create);
router.put('/:name', pokemonController.comment);
router.delete('/:name', pokemonController.deleteUser);


module.exports = router;
