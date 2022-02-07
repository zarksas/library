const { Router } = require('express');
const router = Router();
const { clientsControllers } = require('../controllers/clients.controllers')

router.post('/clients', clientsControllers.createClient);
router.delete('/clients/deleteById/:id', clientsControllers.deleteById);
router.patch('/clients/add/book/:id', clientsControllers.patchBookById);
router.patch('/admin/clients/:id', clientsControllers.takeAwayBook)


module.exports = router;