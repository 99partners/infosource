const Contact = require('../models/Contact');

function isValidEmail(email) {
  return /.+@.+\..+/.test(email);
}

exports.submitContact = async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'validation_error',
        message: 'name, email, and message are required',
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: 'validation_error',
        message: 'invalid email',
      });
    }

    // If database is not connected, gracefully accept the submission without persisting
    if (!require('mongoose').connection.readyState) {
      return res.status(202).json({ ok: true, stored: false, message: 'Received. DB not connected.' });
    }

    const created = await Contact.create({ name, email, company, service, message });
    return res.status(201).json({ ok: true, id: created._id, stored: true });
  } catch (error) {
    console.error('Contact submit error', error);
    // Database connectivity / timeout
    if (error && (error.name === 'MongooseServerSelectionError' || error.code === 'ETIMEDOUT')) {
      return res.status(503).json({ error: 'database_unavailable', message: 'Database is unavailable. Please try again later.' });
    }
    return res.status(500).json({ error: 'internal_error', message: 'Unexpected error occurred' });
  }
};


