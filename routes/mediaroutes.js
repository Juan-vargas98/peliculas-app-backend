const express = require('express');
const router = express.Router();
// NOTA: No hacemos 'const mediaController = require(...)' para evitar fallos de path.

router.get('/', require('../controllers/mediacontroller').getMedia);
router.get('/:id', require('../controllers/mediacontroller').getMediaById);
router.post('/', require('../controllers/mediacontroller').createMedia);
router.put('/:id', require('../controllers/mediacontroller').updateMedia);
router.delete('/:id', require('../controllers/mediacontroller').deleteMedia);

module.exports = router;