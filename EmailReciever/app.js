/// In this project we are using request module form npm

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
var path = require("path");

const app = express();
app.use(express.static(path.join("public")));
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(path.join(__dirname, "/src")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var fname = req.body.inputFirstName;
  var lname = req.body.inputLastName;
  var email = req.body.inputEmail;

  var data = {
    members:[
      {
        email_address: email,
        status  = "subscribed",

      }
    ]

  }
  console.log(fname, lname, email);
});

app.listen(3000);

//API key
//b5136101fa3a3d8c7d51f640363b9351-us1

//Mailchimp id
//593ce83df7
