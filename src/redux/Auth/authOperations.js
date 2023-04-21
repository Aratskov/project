import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import { logOut } from './authSlice';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post('/user/register', credentials);
      const { email, password } = credentials;
      dispatch(loginUser({ email, password }));
      return res.data;
    } catch (error) {
      const { status } = error.response.request;
      if (status === 409) {
        Notify.failure(`${credentials.email} already exists`);
      } else if (status === 500) {
        Notify.failure(`${credentials.name} already exists`);
      }

      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/login', credentials);
      token.set(res.data.token);
      const user = await axios.get('/user/info');
      const userData = { ...user.data, token: res.data.token };
      return userData;
    } catch (error) {
      const { status } = error.response.request;
      if (status === 401) {
        Notify.failure(`Email or password is wrong`);
      } else if (status === 400) {
        Notify.failure(`Error`);
      } else if (status === 500) {
        Notify.failure('Server error');
      }

      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/user/logout');
      token.unset();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    try {
      token.set(persistToken);
      const res = await axios.get('/user/info');
      return res.data;
    } catch (error) {
      setTimeout(() => {
        thunkAPI.dispatch(logOut());
      }, 0);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { token } = getState().auth;
      return Boolean(token);
    },
  }
);
