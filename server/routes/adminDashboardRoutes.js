const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const dashboardController = require('../controllers/dashboardController');
const adminContactController = require('../controllers/adminContactController');

// All routes require authentication
router.use(adminController.verifyToken);

// Dashboard routes
router.get('/stats', dashboardController.getDashboardStats);

// Contact management routes
router.get('/contacts', adminContactController.getAllContacts);
router.get('/contacts/:id', adminContactController.getContactById);
router.delete('/contacts/:id', adminContactController.deleteContact);
router.get('/contacts/export/csv', adminContactController.exportContacts);

module.exports = router;
