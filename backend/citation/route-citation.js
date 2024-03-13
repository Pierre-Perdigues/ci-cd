const express = require('express');
const router = express.Router();
const citationController = require('./controller-citation');

router.get('/', citationController.getCitation);

module.exports = router;
