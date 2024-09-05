const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/edit/:id', userController.getEditUser);
router.post('/users/edit/:id', userController.updateUser);
router.post('/users/delete/:id', userController.deleteUser);

module.exports = router;
