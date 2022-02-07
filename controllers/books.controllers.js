const Book = require('../models/Book.model');

module.exports.booksControllers = {
    createBook: async(req, res) => {
        const { name, genre } = req.body;
        const book = await Book.create({
            name,
            genre
        })
        res.json(book)
    },
    deleteBookById: async(req, res) => {
        await Book.findByIdAndRemove(req.params.id)
    },

    getAllBooks: async(req, res) => {
        const books = await Book.find({}).populate('genre');
        res.json(books)
    },

    patchBookById: async(req, res) => {
        const { name, genre } = req.body;
        const book = await Book.findByIdAndUpdate(req.params.id);
        res.json(book)
    }
}