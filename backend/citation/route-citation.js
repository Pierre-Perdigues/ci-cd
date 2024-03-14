const express = require('express');
const router = express.Router();
const citationController = require('./controller-citation');

// Methode appellé lors d'un get classique de /citation
router.get('/', citationController.getCitation);

module.exports = router;
