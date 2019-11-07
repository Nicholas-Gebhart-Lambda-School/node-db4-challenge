const router = require("express").Router();
const db = require("../data/db-config");
const Recipes = require("../models/recipe-model");

router.get("/", (req, res) => {
  Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(() => {
      res.status(500).json({ err: "Failed to connect to server" });
    });
});

module.exports = router;
