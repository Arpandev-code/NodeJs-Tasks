const express= require('express')
const router= express.Router()
const userController= require('../controllers/userController')


router.get('/createuser',userController.renderCreateUserForm)
router.post('/createuser',userController.createUsers)
router.get('/users',userController.getAllUsers)
router.get('/users/edit/:id',userController.getEditUsers)
router.post('/users/edit/:id',userController.updateUser)
router.post('/users/delete/:id',userController.deleteUser)

module.exports=router;