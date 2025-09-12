const mongoose = require('mongoose');

async function connectToDatabase() {
  const mongoUri = process.env.MONGO_URI;
  mongoose.set('strictQuery', true);

  if (!mongoUri) {
    console.warn('[DB] MONGO_URI not set. Skipping database connection.');
    return { connected: false };
  }

  try {
    await mongoose.connect(mongoUri, { autoIndex: true });
    console.log('Connected to MongoDB');
    return { connected: true };
  } catch (error) {
    console.warn('[DB] Failed to connect to MongoDB. The app will run without DB.', error?.message || error);
    return { connected: false, error };
  }
}

module.exports = connectToDatabase;


