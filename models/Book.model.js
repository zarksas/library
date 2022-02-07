const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String,
    genre: {
        ref: "Genre",
        type: mongoose.SchemaTypes.ObjectId
    },
    review: [{
        ref: "Review",
        type: mongoose.SchemaTypes.ObjectId
    }],
    client: {
        ref: "Client",
        type: mongoose.SchemaTypes.ObjectId
    },
    disabled: {
        type: Boolean,
        default: false
    }
})


const Book = mongoose.model('Book', bookSchema);

module.exports = Book