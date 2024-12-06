const express = require('express');
const router = express.Router();
const { registerUser,loginUser,logoutUser,getUserProfile } = require('../controllers/user.controller');
const {authUser} = require('../middleware/auth.middleware');

router.post('/register', registerUser);

router.post("/login",loginUser);

router.get("/logout",logoutUser);

router.get('/profile',authUser,getUserProfile);

module.exports = router;
