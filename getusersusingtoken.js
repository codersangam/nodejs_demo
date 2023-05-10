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

app.get("/users", verifyToken, function (req, res) {
    User.find().then((results) => {
        res.status(200).json(results);
    })
})

/// Middleware to check Token
function verifyToken(req, res, next) {
    var beaerHeader = req.headers["authorization"]
    var privateKey = "lol";

    var splitdata = beaerHeader.split(" ")
    var token = splitdata[1];
    if (typeof beaerHeader != "undefined") {
        // res.send({ "status": "1" })
        jwt.verify(token, privateKey, (err, authData) => {
            if (err) {
                res.send({ results: err })
            } else {
                next();
            }
        })
    }
    else {
        res.send({
            "status": "0",
            "error": "Token not provided"
        })
    }
}

app.listen(5001)