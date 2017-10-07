const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {type: String, require: true},
    singer: {type: String, require: true},
    releaseYear: {type: Number, require: true}
})

module.exports = mongoose.model('CD', schema);