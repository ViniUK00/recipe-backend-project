const express = require("express");
const mongoose = require("mongoose");
const recipeRoutes = require("./router/recipeRoutes");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://recipe-backend-code:recipe-backend-code@recipe-backend-project.lseshxr.mongodb.net/recipe",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(recipeRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
