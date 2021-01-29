const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello, World!!</h1>");
});
app.get("/about", function (req, res) {
  res.send("index.html");
});
app.listen(3000);
