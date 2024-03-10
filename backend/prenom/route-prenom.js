const express = require('express');
const router = express.Router();
const prenomController = require('./controller-prenom');

router.get('/', prenomController.getAllPrenoms);

module.exports = router;
