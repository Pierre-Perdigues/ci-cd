const express = require('express');
const router = express.Router();
const prenomController = require('../controllers/prenomController');

router.get('/', prenomController.getAllPrenoms);

module.exports = router;
