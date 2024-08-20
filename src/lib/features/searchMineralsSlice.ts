import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchMineralsService } from '../api/searchMinerals';

interface MineralsSearchStateProps {
  minerals: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: MineralsSearchStateProps = {
  minerals: [],
  status: 'idle',
  error: null,
};

export const fetchMinerals = createAsyncThunk<any, string, { rejectValue: string }>(
  'mineralsSearch/fetchMinerals',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const data = await fetchMineralsService(searchTerm);
      console.log('data', data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const mineralsSearchSlice = createSlice({
  name: 'mineralsSearch',
  initialState,
  reducers: {
    clearMinerals(state) {
      state.minerals = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMinerals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMinerals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.minerals = action.payload.payload;
      })
      .addCase(fetchMinerals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearMinerals } = mineralsSearchSlice.actions;
export default mineralsSearchSlice.reducer;
