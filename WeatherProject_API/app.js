const { json } = require("express");
const express = require("express");

/// http helps for
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//using http to get get request to external server node
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "8b6a797644b9164d6a1e22871a65216e";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?units=" +
    units +
    "&q=" +
    query +
    "&appid=" +
    apiKey;
  console.log(url);
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p> The Weather is currently " + weatherDescription + " <p>");
      res.write(
        "</h1>Current temprature in " +
          query +
          " is " +
          temp +
          " degrees Celcius </h1>"
      );
      res.write("<img src = " + imageURL + ">");
      res.send();
    });
  });
  // https.get(url, function (response) {
  //   console.log(response.statusCode);
  //   response.on("data", (data) => {
  //     const ata = JSON.parse(data);
  //     console.log(ata);
  //     const obj = {
  //       name: "Tengis",
  //       faveFood: "Everything",
  //     };
  //     console.log(JSON.stringify(obj));
  //     const temp = ata.main.temp;
  //     const weatherr = ata.weather[0].description;

  //     const icon = ata.weather[0].icon;
  //     const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  //     console.log(temp);

  //     res.write("<p> The weather is currently " + weatherr + " <p>");
  //     res.write(
  //       "<h1>The temperature in " +
  //         query +
  //         " is " +
  //         temp +
  //         " degrees Celcius</h1>"
  //     );
  //     res.write("<img src=" + iconURL + " >");
  //     res.send();
  //   });
  // });
});

app.listen(3000);
