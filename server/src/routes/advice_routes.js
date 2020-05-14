const { Router } = require('express');
const Advice = require('../models/advice');
const adviceController = require('../controllers/adviceController');

const router = Router();

router.get('/', adviceController.random_advice_get);

router.get('/:count', adviceController.random_multiple_get);

module.exports = router;
