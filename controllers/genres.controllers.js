const Genre = require('../models/Genre.model');


module.exports.genresControllers = {
    createGenre: async(req, res) => {
        try {
            const { name } = req.body;
            const genre = await Genre.create({
                name
            })
            res.json(genre)
        } catch (e) {
            console.log(e)
        }
    },
    deleteGenreById: async(req, res) => {
        await Genre.findByIdAndRemove(req.params.id)
    },
    getAllGenres: async(req, res) => {
        const genre = await Genre.find();
        res.json(genre)
    },

    patchBookGenre: async(req, res) => {
        const { book } = req.body;
        await Genre.findByIdAndUpdate(req.params.id, {
            $push : {book: book},
           
        })
        res.json('created book')
    },
}