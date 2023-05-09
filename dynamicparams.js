const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/profile/:name", function (req, res) {
    // console.log(req.params.name);

    var data = { "email": "sangam@gmail.com", "address": "KTM", "skills": ["flutter", "dart", "java", "jython", "python"] }
    res.render('profile', { name: req.params.name, data: data });


})

app.get("/login", function (req, res) {
    res.render("login")
})

app.get("/", function (req, res) {
    res.render("home")
})

app.listen(5001);