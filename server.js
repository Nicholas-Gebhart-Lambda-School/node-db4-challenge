const express = require("express");
const server = express();
const recipesRouter = require("./routes/recipe-routes");

server.use(express.json());
server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.send("<h3>Hello World</h3>");
});

module.exports = server;
