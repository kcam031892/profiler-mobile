import { createSlice } from '@reduxjs/toolkit';
import { bestFriendsService } from 'shared/services/bestFriendsService';
const { getBestFriends } = bestFriendsService();
const initialState = {
  loading: false,
  bestFriends: [],
};

export const bestFriendsSlice = createSlice({
  name: 'bestFriends',
  initialState,
  reducers: {
    setBestFriends(state, action) {
      state.bestFriends = action.payload;
    },
  },
  extraReducers: {
    [getBestFriends.pending]: (state) => {
      state.bestFriends = [];
      state.loading = true;
    },
    [getBestFriends.fulfilled]: (state, { payload }) => {
      state.bestFriends = payload;
      state.loading = false;
    },
  },
});

export const selectBestfriendsSlice = (state) => state.bestFriends;

export default bestFriendsSlice.reducer;
