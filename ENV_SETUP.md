# Environment Setup Guide for 99Infosource

This document explains how to set up and use environment variables for both the client and server parts of the 99Infosource application.

## Server Environment Setup

### Available Environment Files

- `.env.development` - Used for development environment
- `.env.production` - Used for production environment

### Environment Variables

| Variable | Description | Example |
|----------|-------------|--------|
| PORT | Server port number | 5000 |
| NODE_ENV | Environment name | development, production |
| ALLOWED_ORIGINS | CORS allowed origins (comma-separated) | http://localhost:5731,http://localhost:5173 |
| MONGO_URI | MongoDB connection string | mongodb+srv://... |
| JWT_SECRET | Secret key for JWT tokens | your_secret_key |
| JWT_EXPIRES_IN | JWT token expiration time | 7d |

### How to Use

The server automatically loads the appropriate environment file based on the NODE_ENV value:

```bash
# For development
NODE_ENV=development node index.js

# For production
NODE_ENV=production node index.js
```

## Client Environment Setup

### Available Environment Files

- `.env.development` - Used for development environment
- `.env.production` - Used for production environment

### Environment Variables

| Variable | Description | Example |
|----------|-------------|--------|
| VITE_API_BASE_URL | Base URL for API requests | http://localhost:5000 |
| VITE_APP_TITLE | Application title | 99Infosource (Development) |
| VITE_APP_ENV | Environment name | development, production |
| VITE_FEATURE_DEBUG_TOOLS | Enable/disable debug tools | true, false |

### How to Use

Vite automatically loads the appropriate environment file based on the mode:

```bash
# For development
npm run dev

# For production build
npm run build
```

### Accessing Environment Variables in Code

In your React components or services, you can access the environment variables using `import.meta.env`:

```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
console.log(`API URL: ${apiUrl}`);
```

## Important Notes

1. Never commit sensitive information like API keys or passwords to version control.
2. For production deployment, set up proper environment variables on your hosting platform.
3. Always use different values for development and production environments.
4. For local development, you can create a `.env.local` file which will override values in `.env.development` (this file should be in .gitignore).