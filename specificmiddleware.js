const express = require('express');

const app = express();

const router = express.Router();

var checkUrl = function (req, res, next) {
    console.log("The current url is : ", req.originalUrl);
    next();
}

app.get("/", checkUrl, function (req, res) {
    res.send("This is homepage");
});
app.get("/login", checkUrl, function (req, res) {
    res.send("This is loginpage");
});
app.get("/about", function (req, res) {
    res.send("This is aboutpage");
});
app.get("/contact", function (req, res) {
    res.send("This is contactpage");
});

app.use("/", router);

app.listen(5001)