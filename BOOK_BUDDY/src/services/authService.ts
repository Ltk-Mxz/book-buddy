import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Admin credentials
const ADMIN_USER = {
  id: 1,
  name: 'Admin',
  email: 'admin@bookbuddy.com',
  password: 'admin123',
  isAdmin: true
};

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  // Check for admin login
  if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
    const token = 'admin-token-' + Date.now(); // Simple token generation
    return {
      user: {
        id: ADMIN_USER.id,
        name: ADMIN_USER.name,
        email: ADMIN_USER.email,
        isAdmin: ADMIN_USER.isAdmin
      },
      token
    };
  }

  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};