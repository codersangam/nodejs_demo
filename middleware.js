const express = require('express');
var app = express();

var checkUrl = function (req, res, next) {
    console.warn("The current url is", req.originalUrl);
    next();
}
app.use(checkUrl);

app.get("/", function (req, res) {
    res.send("This is homepage");
});
app.get("/about", function (req, res) {
    res.send("This is about page");
});
app.get("/contact", function (req, res) {
    res.send("This is contactpage");
});
app.get("/login", function (req, res) {
    res.send("This is loginpage");
});

app.listen(5001);