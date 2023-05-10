const express = require('express');
const app = express();
const User = require('./models/users');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const jsonparser = bodyParser.json();

mongoose.connect("mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net/demo_db", { useNewUrlParser: true });

app.delete("/user/:id", jsonparser, function (req, res) {
    User.deleteOne({ _id: req.params.id }).then((result) => res.status(200).json(result)).catch((error) => console.warn(error));
})

app.listen(5001);