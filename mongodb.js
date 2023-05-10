const mongoose = require('mongoose');
const User = require('./models/users');

mongoose.connect("mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net/demo_db", { useNewUrlParser: true });

// User.find({}).then(function (users) {
//     console.warn(users);
// });

var data = new User({
    _id: new mongoose.Types.ObjectId(),
    name: "tony",
    email: "stark@gmail.com"
});

data.save().then((result) =>
    console.warn(result));





