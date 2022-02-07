const { Router } = require('express');
const router = Router();
const { genresControllers } = require('../controllers/genres.controllers')

router.post('/admin/genres', genresControllers.createGenre);
router.delete('/admin/genres/delete/:id', genresControllers.deleteGenreById);
router.get('/admin/genres', genresControllers.getAllGenres);
router.patch('/admin/genres/:id', genresControllers.patchBookGenre)

module.exports = router