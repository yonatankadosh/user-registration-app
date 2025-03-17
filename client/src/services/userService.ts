import axios from 'axios';
import { User } from '../types/User';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const userService = {
  getAllUsers: async (): Promise<User[]> => {
    try {
      console.log('Fetching users from:', `${API_URL}/api/users`);
      const response = await axios.get(`${API_URL}/api/users`);
      console.log('Users response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      if (axios.isAxiosError(error)) {
        console.error('Response data:', error.response?.data);
        console.error('Response status:', error.response?.status);
      }
      throw error;
    }
  },

  createUser: async (user: Omit<User, 'id'>): Promise<User> => {
    try {
      console.log('Creating user at:', `${API_URL}/api/users`);
      console.log('User data:', user);
      const response = await axios.post(`${API_URL}/api/users`, user);
      console.log('Create user response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      if (axios.isAxiosError(error)) {
        console.error('Response data:', error.response?.data);
        console.error('Response status:', error.response?.status);
      }
      throw error;
    }
  }
}; 