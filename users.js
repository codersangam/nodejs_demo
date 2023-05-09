const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    name: { type: String, default: "" },
    email: { type: String, default: "" },
});

module.exports = mongoose.model("users", userSchema);