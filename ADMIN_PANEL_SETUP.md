# Admin Panel Setup Instructions

## Overview
Your admin panel has been successfully created! Here's what's included:

### Features
- **Authentication System**: JWT-based login with rate limiting
- **Dashboard**: Statistics overview with recent contacts and service analytics
- **Contact Management**: View, filter, search, and delete contact submissions
- **Export Functionality**: Export contacts to CSV
- **Responsive Design**: Works on desktop and mobile devices

### Admin Panel Access
- **URL**: `http://localhost:5173/admin/login`
- **Default Credentials**:
  - Username: `admin`
  - Password: `admin123`
  - Email: `admin@infosource.com`

⚠️ **IMPORTANT**: Change the default password after first login!

## Server Setup

### 1. Environment Variables
Create a `.env` file in the `server` directory with:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/infosource

# JWT Secret (generate a strong secret in production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000

# CORS Configuration (comma-separated list of allowed origins)
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

### 2. Create Initial Admin User
Run the script to create the initial admin user:

```bash
cd server
node scripts/createAdmin.js
```

### 3. Start the Server
```bash
cd server
npm run dev
```

## Client Setup

### 1. Start the Client
```bash
cd client
npm run dev
```

### 2. Access Admin Panel
Navigate to: `http://localhost:5173/admin/login`

## Admin Panel Routes

- `/admin/login` - Login page
- `/admin/dashboard` - Main dashboard with statistics
- `/admin/contacts` - Contact management page
- `/admin/users` - User management (placeholder)
- `/admin/settings` - Settings page (placeholder)

## API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `GET /api/admin/profile` - Get admin profile

### Dashboard
- `GET /api/admin/dashboard/stats` - Get dashboard statistics

### Contact Management
- `GET /api/admin/dashboard/contacts` - Get all contacts (with pagination and filtering)
- `GET /api/admin/dashboard/contacts/:id` - Get contact by ID
- `DELETE /api/admin/dashboard/contacts/:id` - Delete contact
- `GET /api/admin/dashboard/contacts/export/csv` - Export contacts to CSV

### Admin Management
- `POST /api/admin/create` - Create new admin (super admin only)
- `GET /api/admin/admins` - Get all admins (super admin only)

## Security Features

1. **Rate Limiting**: Login attempts are limited to 5 per 15 minutes per IP
2. **JWT Authentication**: Secure token-based authentication
3. **Password Hashing**: Passwords are hashed using bcrypt
4. **CORS Protection**: Configurable CORS settings
5. **Input Validation**: Server-side validation for all inputs

## Database Schema

### Admin Collection
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['admin', 'super_admin']),
  isActive: Boolean (default: true),
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Contact Collection (existing)
```javascript
{
  name: String (required),
  email: String (required),
  company: String,
  service: String,
  message: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## Customization

### Adding New Admin Features
1. Create new controller in `server/controllers/`
2. Add routes in `server/routes/`
3. Create frontend components in `client/src/pages/admin/`
4. Update navigation in `AdminLayout.jsx`

### Styling
The admin panel uses the same design system as your main website:
- Tailwind CSS for styling
- Shadcn/ui components
- Consistent color scheme and typography

## Production Deployment

### Security Checklist
1. Change default admin password
2. Generate a strong JWT secret
3. Configure proper CORS origins
4. Use HTTPS in production
5. Set up proper database authentication
6. Configure rate limiting for production load
7. Set up proper logging and monitoring

### Environment Variables for Production
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/infosource
JWT_SECRET=very-long-random-secret-key
PORT=5000
ALLOWED_ORIGINS=https://yourdomain.com
NODE_ENV=production
```

## Troubleshooting

### Common Issues
1. **Database Connection**: Ensure MongoDB is running and connection string is correct
2. **CORS Errors**: Check ALLOWED_ORIGINS includes your client URL
3. **JWT Errors**: Ensure JWT_SECRET is set in environment variables
4. **Admin Creation**: Run the createAdmin script if admin user doesn't exist

### Logs
Check server console for detailed error messages. The server logs all authentication attempts and errors.

## Support
The admin panel is fully integrated with your existing contact form system. All existing contact submissions will be visible in the admin panel immediately after setup.
