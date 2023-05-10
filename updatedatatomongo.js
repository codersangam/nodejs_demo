const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/users');

var jsonParser = bodyParser.json();

mongoose.connect("mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net/demo_db", { useNewUrlParser: true });

app.put("/user/:id", jsonParser, function (req, res) {
    var data = {
        $set: {
            name: req.body.name,
            email: req.body.email,
        }
    }
    User.updateOne({ _id: req.params.id }, data).then((result) => res.status(200).json(result)).catch((error) => console.warn(error))
})

app.listen(5001);