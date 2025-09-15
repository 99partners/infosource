const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectToDatabase = require('./db');
const path = require('path');

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
console.log(`Loading environment from ${envFile}`);
dotenv.config({ path: path.resolve(__dirname, envFile) });

const app = express();

// Security and body parsing
app.use(helmet());
app.use(express.json());

// CORS configuration
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean);
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

// Routes
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');
const adminDashboardRoutes = require('./routes/adminDashboardRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/dashboard', adminDashboardRoutes);

// Start server regardless of DB status (DB connection is attempted but non-blocking)
const port = process.env.PORT || 5000;
connectToDatabase()
  .finally(() => {
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  });


