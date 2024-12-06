const express = require('express');
const router = express.Router();
const { 
    registerCaptian, 
    loginCaptian, 
    logoutCaptian, 
    getCaptianProfile 
} = require('../controllers/captian.controller'); 
const {authCaptain} = require('../middleware/auth.middleware');

router.post('/register', registerCaptian);
router.post('/login', loginCaptian);

router.get('/logout', logoutCaptian);


router.get('/profile',authCaptain, getCaptianProfile);

module.exports = router;
