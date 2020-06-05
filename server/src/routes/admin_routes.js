const { Router } = require('express');
const adminController = require('../controllers/adminController');

const router = Router();

router.get('/', adminController.admin_advice_get);
router.post('/', adminController.admin_advice_post);
router.delete('/', adminController.admin_advice_by_id_delete);

module.exports = router;
