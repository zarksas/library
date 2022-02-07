const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    blockId: {
        type: Boolean,
        default: false
    },
    book: [{
        ref: "Book",
        type: mongoose.SchemaTypes.ObjectId,
    }]
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;