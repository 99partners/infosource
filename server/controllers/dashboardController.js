const Contact = require('../models/Contact');

// Get dashboard statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const thisWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Get total contacts
    const totalContacts = await Contact.countDocuments();

    // Get today's contacts
    const todayContacts = await Contact.countDocuments({
      createdAt: { $gte: today }
    });

    // Get this week's contacts
    const weekContacts = await Contact.countDocuments({
      createdAt: { $gte: thisWeek }
    });

    // Get this month's contacts
    const monthContacts = await Contact.countDocuments({
      createdAt: { $gte: thisMonth }
    });

    // Get contacts by service (top 5)
    const contactsByService = await Contact.aggregate([
      { $match: { service: { $exists: true, $ne: null, $ne: '' } } },
      { $group: { _id: '$service', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Get recent contacts (last 10)
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('name email company service message createdAt')
      .lean();

    // Get contacts by month (last 6 months for chart)
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 6, 1);
    const contactsByMonth = await Contact.aggregate([
      { $match: { createdAt: { $gte: sixMonthsAgo } } },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    res.json({
      success: true,
      stats: {
        totalContacts,
        todayContacts,
        weekContacts,
        monthContacts,
        contactsByService,
        recentContacts,
        contactsByMonth
      }
    });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
};
