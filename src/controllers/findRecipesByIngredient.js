const Recipe = require("../schemas/recipes");

const findRecipesByIngredient = async (req, res) => {
  const { ingredient } = req.params;

  if (!ingredient) {
    return res.status(400).json({
      error:
        "Incomplete recipe data in request body (Ingredient needed in the search parameter)",
    });
  }
  try {
    const recipes = await Recipe.find({ ingredients: { $in: [ingredient] } });
    res.status(200).json(recipes);
} catch (error) {
    console.error('Error finding recipes by ingredient:', error);
    res.status(500).json({ error: 'Error finding recipes by ingredient' });
}
};

module.exports = findRecipesByIngredient;

