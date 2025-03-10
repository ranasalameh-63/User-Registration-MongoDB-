const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Item = mongoose.model('Users', itemSchema);
module.exports = Item;
