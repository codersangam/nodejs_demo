const express = require('express');
const app = express();

const mongoose = require('mongoose');
const users = require('./models/users');

mongoose.connect("mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net/demo_db", { useNewUrlParser: true });

app.get("/users", function (req, res) {
    users.find().select("email").then((data) => res.status(200).json(data));
})

app.listen(5001)