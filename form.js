const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const urlEncoder = bodyParser.urlencoded();

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.get("/", function (req, res) {
    res.render('home')
})

app.post("/login", urlEncoder, function (req, res) {
    console.warn(req.body.email);
    res.render('home')
})

app.get("/login", function (req, res) {
    res.render('login')
})

app.listen(5001);
