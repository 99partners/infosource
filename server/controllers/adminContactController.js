const Contact = require('../models/Contact');

// Get all contacts with pagination and filtering
exports.getAllContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    
    // Build filter object
    const filter = {};
    
    if (req.query.search) {
      filter.$or = [
        { name: { $regex: req.query.search, $options: 'i' } },
        { email: { $regex: req.query.search, $options: 'i' } },
        { company: { $regex: req.query.search, $options: 'i' } },
        { service: { $regex: req.query.search, $options: 'i' } }
      ];
    }
    
    if (req.query.service) {
      filter.service = req.query.service;
    }
    
    if (req.query.dateFrom || req.query.dateTo) {
      filter.createdAt = {};
      if (req.query.dateFrom) {
        filter.createdAt.$gte = new Date(req.query.dateFrom);
      }
      if (req.query.dateTo) {
        filter.createdAt.$lte = new Date(req.query.dateTo);
      }
    }

    // Get total count for pagination
    const total = await Contact.countDocuments(filter);
    
    // Get contacts
    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get unique services for filter dropdown
    const services = await Contact.distinct('service', { service: { $exists: true, $ne: null, $ne: '' } });

    res.json({
      success: true,
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      services
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        error: 'not_found',
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      contact
    });

  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        error: 'not_found',
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};

// Export contacts to CSV
exports.exportContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    
    // Create CSV content
    const csvHeader = 'Name,Email,Company,Service,Message,Created At\n';
    const csvRows = contacts.map(contact => {
      const row = [
        `"${contact.name || ''}"`,
        `"${contact.email || ''}"`,
        `"${contact.company || ''}"`,
        `"${contact.service || ''}"`,
        `"${(contact.message || '').replace(/"/g, '""')}"`, // Escape quotes in message
        `"${contact.createdAt.toISOString()}"`
      ].join(',');
      return row;
    }).join('\n');
    
    const csvContent = csvHeader + csvRows;
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=contacts-export.csv');
    res.send(csvContent);

  } catch (error) {
    console.error('Export contacts error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};
