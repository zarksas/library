const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    name: String,
    book: [{
        ref: "Book",
        type: mongoose.SchemaTypes.ObjectId
    }]
})

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;