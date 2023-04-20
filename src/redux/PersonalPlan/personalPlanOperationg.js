import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const postPlanPre = createAsyncThunk(
  'plan/postpre',
  async (credentials, { rejectWithValue }) => {
    try {
      
      const data = await axios.post('/personal-plan/pre', credentials);
        console.log('data', data.data);
        return data.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const postPlan = createAsyncThunk(
//   'plan/postpre',
//   async (credentials, { rejectWithValue }) => {
//     try {
      
//       const data = await axios.post('/personal-plan', credentials);
       
//         return data.data
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

