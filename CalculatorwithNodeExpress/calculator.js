// I used nodemon for updating server all the time and debugg the code
// also installed body-parser from npm

// express is like library of shortcut for nodejs like bootsrap for css
// jquery for js

const express = require("express");

// make able to parse data and use it as how i wanted
const bodyParser = require("body-parser");

const app = express();
// extended:true is mandotory IDK and urlencoded can be diff depend on your usage of data

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // Number is func from nodejs or js
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;

  res.send("Thanks you for attribute" + result);
});

app.get("/bmiCalculator", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/bmiCalculator", function (req, res) {
  /// this is how you use bodyparser
  var n1 = parseFloat(req.body.num1);
  var n2 = parseFloat(req.body.num2);
  var result = n1 / (n2 * n2);
  console.log(req.body);
  res.send("Your BMI is " + result);
});
app.listen(3000);
