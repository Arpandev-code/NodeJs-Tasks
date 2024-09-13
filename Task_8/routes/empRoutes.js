const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');

router.post('/employee', empController.getEmployees)
router.post('/employee/edit/:id', empController.updateEmployee);
router.post('/employee/delete/:id', empController.deleteEmployee);