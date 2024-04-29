const express = require('express');
const router = express.Router();
const postRecipe = require('../controllers/postRecipe');
const { getAllRecipes } = require('../controllers/getAllRecipes');


router.post('/add-recipe', postRecipe);
router.get('/getAllRecipes', getAllRecipes);

module.exports = router;
