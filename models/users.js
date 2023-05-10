const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String },
});

module.exports = mongoose.model("users", userSchema);