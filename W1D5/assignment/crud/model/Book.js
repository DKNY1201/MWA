const mongoose = require('mongoose');

const scheme = new mongoose.Schema({
    title: {type: String, require: true},
    author: {type: Array, require: true},
    published_date: {type: Date},
    pages: {type: Number, require: true},
    language: {type: String, require: true},
    publisher: {
        name: {type: String},
        founded: {type: String},
        location: {type: String}
    }
});

scheme.methods.getPublisher = function () {
    return `The ${this.publisher.name} is founded in ${this.publisher.founded} in ${this.publisher.location}`;
}

scheme.methods.setPublisher = function (name, founded, location) {
    this.name = name;
    this.founded = founded;
    this.location = location;
}

module.exports = mongoose.model('Book', scheme);