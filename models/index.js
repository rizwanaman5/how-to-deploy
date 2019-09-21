const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/simpleform', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => err ? console.log(err) : console.log(`mongo connected`))

module.exports.Form = require('./form')