const { Router } = require('express');
const authController = require('../controllers/authController');
const router=Router()

router.get('/register',authController.getRegister)
router.post('/resgister',authController.postRegister)
router.get('/login',authController.getLogin)
router.post('/login',authController.postLogin)

module.exports=router
