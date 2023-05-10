const express = require('express');
const app = express();

const mongoose = require('mongoose');
const users = require('./models/users');

mongoose.connect("mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net/demo_db", { useNewUrlParser: true });

app.get("/search/:name", function (req, res) {
    var regex = RegExp(req.params.name, "i");
    users.find({ name: regex }).then((results) => res.status(200).json(results)).catch((error) => console.warn(error))
})

app.listen(5001)