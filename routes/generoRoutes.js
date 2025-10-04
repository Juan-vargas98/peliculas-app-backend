// En /routes/generoroutes.js
const express = require('express');
const router = express.Router();
// Importa el controlador con el nombre estandarizado en minúsculas
const generoController = require('../controllers/generoController'); 

router.get('/', generoController.getGeneros);
router.get('/:id', generoController.getGeneroById);
router.post('/', generoController.createGenero);
router.put('/:id', generoController.updateGenero);
router.delete('/:id', generoController.deleteGenero);

module.exports = router;