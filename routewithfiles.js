const express = require('express');

const app = express();

const router = express.Router();

var checkUrl = function (req, res, next) {
    console.log("The current url is : ", req.originalUrl);
    next();
}

app.get("/", checkUrl, function (req, res) {
    res.sendFile(__dirname + "/home.html");
});
app.get("/login", checkUrl, function (req, res) {
    res.sendFile(__dirname + "/login.html");
});
app.get("/about", function (req, res) {
    // res.send("This is aboutpage");
    res.sendFile(__dirname + "/about.html");
});
app.get("/contact", function (req, res) {
    // res.send("This is contactpage");
    res.sendFile(__dirname + "/contact.html");
});

app.use("/", router);

app.listen(5001)