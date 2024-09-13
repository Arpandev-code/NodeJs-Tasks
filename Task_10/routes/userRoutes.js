const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuthenticated = require('../middleware/auth');

router.get('/users', isAuthenticated,userController.getUsers);
router.post('/users', isAuthenticated,userController.createUser);
router.get('/users/edit/:id', isAuthenticated,userController.getEditUser);
router.post('/users/edit/:id', isAuthenticated,userController.updateUser);
router.post('/users/delete/:id', isAuthenticated,userController.deleteUser);

module.exports = router;
