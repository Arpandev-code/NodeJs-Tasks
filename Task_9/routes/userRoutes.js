const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuthenticated = require('../middleware/auth');
const nocache = require('../middleware/nocache');

router.get('/users', isAuthenticated,nocache, userController.getUsers);
router.post('/users', isAuthenticated,nocache, userController.createUser);
router.get('/users/edit/:id', isAuthenticated,nocache,userController.getEditUser);
router.post('/users/edit/:id', isAuthenticated,nocache,userController.updateUser);
router.post('/users/delete/:id', isAuthenticated,nocache,userController.deleteUser);
module.exports = router;
