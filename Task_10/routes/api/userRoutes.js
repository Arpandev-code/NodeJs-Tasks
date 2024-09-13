const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userController');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserDetails);
router.post('/users', userController.createUser);
router.put('/users', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;