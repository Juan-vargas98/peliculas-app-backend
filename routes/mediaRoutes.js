const express = require('express');
const router = express.Router();
// NOTA: No hacemos 'const mediaController = require(...)' para evitar fallos de path.

router.get('/', require('../controllers/mediaController').getMedia);
router.get('/:id', require('../controllers/mediaController').getMediaById);
router.post('/', require('../controllers/mediaController').createMedia);
router.put('/:id', require('../controllers/mediaController').updateMedia);
router.delete('/:id', require('../controllers/mediaController').deleteMedia);

module.exports = router;