const {Router } = require('express');
const {login,register,renewToken } = require('../controllers/auth.controller')
const router = Router();
router.post('/login',login);
router.post('/registrar',register);
router.get('/renew',renewToken);


module.exports = router;