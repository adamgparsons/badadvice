const { Router } = require('express');
const adviceController = require('../controllers/adviceController');

const router = Router();
router.get('/', adviceController.advice_get);
router.get('/random', adviceController.random_advice_get);
router.get('/id=:id', adviceController.advice_by_id_get);
router.get('/count=:count', adviceController.random_multiple_get);

router.post('/', adviceController.advice_post);

router.delete('/id=:id', adviceController.advice_by_id_delete);

module.exports = router;
