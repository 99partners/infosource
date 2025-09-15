const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Public routes (no authentication required)
router.post('/login', adminController.loginLimiter, adminController.login);

// Protected routes (authentication required)
router.use(adminController.verifyToken);

// Admin profile and management
router.get('/profile', adminController.getProfile);
router.post('/create', adminController.createAdmin);
router.get('/admins', adminController.getAllAdmins);

module.exports = router;
