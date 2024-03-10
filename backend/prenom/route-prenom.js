const express = require('express');
const router = express.Router();
const prenomController = require('./controller-prenom');

// CRUD endpoints
router.post('/', prenomController.createPrenom);
router.get('/', prenomController.getAllPrenoms);
router.put('/:id', prenomController.updatePrenom);
router.delete('/:id', prenomController.deletePrenom);

module.exports = router;
