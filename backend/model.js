// model.js
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    avatar: String,
    ott: String,
    noOfEps: Number,
    noOfSea: Number,
    rating: Number,
    mainImage: String,
    mainInfo: String,
    trailer: String,
    id: Number, // Keep id as a Number
});

const webseries = mongoose.model('Webseries', schema);
module.exports = webseries;
    