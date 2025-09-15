const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'too_many_attempts',
    message: 'Too many login attempts, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Generate JWT token
const generateToken = (adminId) => {
  return jwt.sign({ adminId }, process.env.JWT_SECRET || 'fallback-secret-key', {
    expiresIn: '24h'
  });
};

// Admin login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: 'validation_error',
        message: 'Username and password are required'
      });
    }

    // Find admin by username or email
    const admin = await Admin.findOne({
      $or: [{ username }, { email: username }],
      isActive: true
    });

    if (!admin) {
      return res.status(401).json({
        error: 'invalid_credentials',
        message: 'Invalid username or password'
      });
    }

    // Check password
    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: 'invalid_credentials',
        message: 'Invalid username or password'
      });
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    // Generate token
    const token = generateToken(admin._id);

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin
      }
    });

  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};

// Verify token middleware
exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        error: 'access_denied',
        message: 'No token provided'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-key');
    const admin = await Admin.findById(decoded.adminId).select('-password');
    
    if (!admin || !admin.isActive) {
      return res.status(401).json({
        error: 'access_denied',
        message: 'Invalid or inactive admin account'
      });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({
      error: 'access_denied',
      message: 'Invalid token'
    });
  }
};

// Get admin profile
exports.getProfile = async (req, res) => {
  try {
    res.json({
      success: true,
      admin: req.admin
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};

// Create admin (super admin only)
exports.createAdmin = async (req, res) => {
  try {
    if (req.admin.role !== 'super_admin') {
      return res.status(403).json({
        error: 'forbidden',
        message: 'Only super admins can create new admin accounts'
      });
    }

    const { username, email, password, role = 'admin' } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        error: 'validation_error',
        message: 'Username, email, and password are required'
      });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      $or: [{ username }, { email }]
    });

    if (existingAdmin) {
      return res.status(400).json({
        error: 'duplicate_error',
        message: 'Admin with this username or email already exists'
      });
    }

    const newAdmin = await Admin.create({
      username,
      email,
      password,
      role
    });

    res.status(201).json({
      success: true,
      admin: {
        id: newAdmin._id,
        username: newAdmin.username,
        email: newAdmin.email,
        role: newAdmin.role,
        createdAt: newAdmin.createdAt
      }
    });

  } catch (error) {
    console.error('Create admin error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};

// Get all admins (super admin only)
exports.getAllAdmins = async (req, res) => {
  try {
    if (req.admin.role !== 'super_admin') {
      return res.status(403).json({
        error: 'forbidden',
        message: 'Only super admins can view all admin accounts'
      });
    }

    const admins = await Admin.find({}).select('-password');
    res.json({
      success: true,
      admins
    });

  } catch (error) {
    console.error('Get admins error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};

// Export rate limiter for use in routes
exports.loginLimiter = loginLimiter;
