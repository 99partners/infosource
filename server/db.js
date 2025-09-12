const mongoose = require('mongoose');

async function connectToDatabase() {
  const mongoUri = process.env.MONGO_URI;
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri, {
    autoIndex: true,
  });
  console.log('Connected to MongoDB');
}

module.exports = connectToDatabase;


