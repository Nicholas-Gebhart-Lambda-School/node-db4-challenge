const router = require("express").Router();
const db = require("../data/db-config");

router.get("/", (req, res) => {
  res.send("<h3>Recipes</h3>");
});

module.exports = router;
