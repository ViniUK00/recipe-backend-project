const mongoose = require("mongoose");
const Recipe = require("../schemas/recipes");

const postRecipe = async (req, res) => {
  console.log("Process has started", req.body);
  const { recipeName, ingredients, instructions } = req.body;

  if (!recipeName || !ingredients || !instructions) {
    return res.status(400).json({
      error: "Incomplete recipe data in request body",
    });
  }

  const newRecipe = new Recipe({
    recipeName: recipeName,
    ingredients: ingredients,
    instructions: instructions,
  });

  newRecipe
    .save()
    .then((recipe) => {
      console.log("Recipe saved successfully:", recipe);
      return res.status(200).json({
        message: "Data successfully uploaded",
        data: recipe,
      });
    })
    .catch((error) => {
      console.error("Error saving recipe:", error);
      return res.status(500).json({
        error: "Could not save your new recipe",
      });
    });
};

module.exports = postRecipe;
