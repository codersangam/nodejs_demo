const express = require('express');
const app = express();
const User = require('./models/users');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

mongoose.connect("mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net/demo_db", { useNewUrlParser: true });

app.post("/user", jsonParser, function (req, res) {
    const data = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        "email": req.body.email,
    });
    // res.end(req.body.name);
    data.save().then((result) =>
        res.json(result)
    ).catch((error) => console.warn(error));
})

app.listen(5001)