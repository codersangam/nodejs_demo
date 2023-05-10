const crypto = require('crypto');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var parsedJson = bodyParser.json();

const mongoose = require('mongoose');
const User = require('./models/users');

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

    data.save().then((results) => res.status(200).json(results)).catch((err) => console.warn(err));
})

app.listen(5001)