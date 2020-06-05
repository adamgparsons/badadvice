const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.post('/signup', authController.add_user_post);
router.post('/login', authController.login_user_post);

module.exports = router;
