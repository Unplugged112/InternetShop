import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  error: null
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = loginSlice.actions;

export default loginSlice.reducer;