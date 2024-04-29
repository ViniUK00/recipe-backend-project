const express = require("express");
const router = express.Router();
const postRecipe = require("../controllers/postRecipe");
const findRecipesByIngredient = require("../controllers/findRecipesByIngredient");
const { getAllRecipes } = require("../controllers/getAllRecipes");

router.post("/add-recipe", postRecipe);
router.get("/get-all-recipes", getAllRecipes);
router.get("/find-recipes-by-ingredient/:ingredient", findRecipesByIngredient)
module.exports = router;
