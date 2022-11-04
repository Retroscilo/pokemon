var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Toutes les routes users commence par /users (voir app.js ligne 8)

router.get('/:name', pokemonController.index);
router.post('/', pokemonController.create);
router.delete('/:id', pokemonController.deleteUser);



module.exports = router;
