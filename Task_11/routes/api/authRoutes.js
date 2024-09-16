const express=require('express')
const verifyToken=require('../../middleware/token')
const route=express.Router();
const authController=require('../../controllers/api/authController');
route.post('/login',authController.login);
route.post('/register',authController.register);
route.get('/userinfo',verifyToken, authController.getUserInfo);

module.exports=route
