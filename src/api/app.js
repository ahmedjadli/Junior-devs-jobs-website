const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cors());

app.get("/api/jobs", (req, res) => {
  getAsync("github")
    .then((data) =>
      res.status(200).json({
        success: true,
        data: JSON.parse(data),
      })
    )
    .catch((err) => res.status(400).json({ success: false, err }));
});
// Serve static assets if in production
if (process.env.NODE_ENV == "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

module.exports = app;
