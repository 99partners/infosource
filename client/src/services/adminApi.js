const API_BASE = '/api/admin';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('adminToken');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  };
};

// Admin authentication
export const adminAuth = {
  login: async (credentials) => {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    return response.json();
  },

  getProfile: async () => {
    const response = await fetch(`${API_BASE}/profile`, {
      headers: getAuthHeaders()
    });
    return response.json();
  }
};

// Dashboard API
export const dashboardApi = {
  getStats: async () => {
    const response = await fetch(`${API_BASE}/dashboard/stats`, {
      headers: getAuthHeaders()
    });
    return response.json();
  }
};

// Contacts API
export const contactsApi = {
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_BASE}/dashboard/contacts?${queryString}`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE}/dashboard/contacts/${id}`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE}/dashboard/contacts/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return response.json();
  },

  exportCSV: async () => {
    const response = await fetch(`${API_BASE}/dashboard/contacts/export/csv`, {
      headers: getAuthHeaders()
    });
    return response;
  }
};

// Admin management API
export const adminManagementApi = {
  getAllAdmins: async () => {
    const response = await fetch(`${API_BASE}/admins`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  createAdmin: async (adminData) => {
    const response = await fetch(`${API_BASE}/create`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(adminData)
    });
    return response.json();
  }
};
