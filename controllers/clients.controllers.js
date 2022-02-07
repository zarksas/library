const Book = require("../models/Book.model");
const Client = require("../models/Client.model");
const { booksControllers } = require("./books.controllers");


module.exports.clientsControllers = {
    createClient: async(req, res) => {
        try {
            const { name } = req.body;
            const client = await Client.create({
                name: name
            })
            res.json(client)
        } catch (e) {
            console.log(e)
        }
       
    },

    deleteById: async(req, res) => {
        await Client.findByIdAndRemove(req.params.id)
    },

    patchBookById: async(req, res) => {
        try {
        const { book } = req.body
        const client = await Client.findById(req.params.id);
        const books = await Book.findById(book)
        
        if (client.book.length >= 3) {
           return res.json('Больше трех книг не доступно')
        } 

        if (books.disabled) {
            return res.json('книга уже арендована')
        }

        if (client.blockId) {
            return res.json('вы заблокированы')
        }

        await Client.findByIdAndUpdate(req.params.id, {
            $push: {book: book}
        }).populate('book')
        await Book.findByIdAndUpdate(book, {
            disabled: true
        })

        res.json('Вы взяли книгу в аренду')
    } catch (e) {
        res.json(e)
    }
       
    },

    takeAwayBook: async(req, res) => {
        const { book } = req.body;
            await Client.findByIdAndUpdate(req.params.id, {
            blockId: true
        })

        await Book.findByIdAndUpdate(book, {
            disabled: false
        })
        res.json('Пользователь заблокирован')

    }

}    
