import userApi from '@/apis/userApi';

export const userService = {
  fetchUsers: async () => {
    try {
      const response = await userApi.getAll();
      return response.data || [];
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
  },

  addUser: async (userData) => {
    try {
      const response = await userApi.create(userData);
      return response.data;
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  },
};

export default userService;
