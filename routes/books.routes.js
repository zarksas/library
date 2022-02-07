const { Router } = require('express');
const router = Router();
const { booksControllers } = require('../controllers/books.controllers')

router.post('/admin/books', booksControllers.createBook);
router.delete('/admin/books.delete/:id', booksControllers.deleteBookById);
router.get('/admin/books', booksControllers.getAllBooks);
router.patch('/admin/books/:id', booksControllers.patchBookById)

module.exports = router;