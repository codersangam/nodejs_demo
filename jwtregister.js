const crypto = require('crypto');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

var parsedJson = bodyParser.json();

const mongoose = require('mongoose');
const User = require('./models/users');
const { error } = require('console');

mongoose.connect("mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net/demo_db", { useNewUrlParser: true });

app.post("/register", parsedJson, function (req, res) {
    var hash = crypto.createHash('sha256');
    var password = hash.update(req.body.password).digest('hex');

    var data = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: password,
    })

    var privateKey = "lol";

    data.save().then((results) => {
        jwt.sign({ results }, privateKey, { "expiresIn": "300s" }, (error, token) => {
            res.status(200).json({ token });
        }).catch((error) => {
            console.warn(error);
        })
    });
})

app.listen(5001)