import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    name: 'Admin MobyFlow',
    email: 'admin@mobyflow.vn',
    role: 'admin',
  },
  theme: 'light',
  notificationsCount: 3,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    clearNotifications: (state) => {
      state.notificationsCount = 0;
    },
  },
});

export const { setUser, toggleTheme, clearNotifications } = userSlice.actions;

export default userSlice.reducer;
