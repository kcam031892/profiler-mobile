import { createSlice } from '@reduxjs/toolkit';
import { influencersService } from 'shared/services/influencersService';
const { getTopInfluencers } = influencersService();

const initialState = {
  loading: false,
  topInfluencers: [],
};

export const influencersSlice = createSlice({
  name: 'influencers',
  initialState,
  reducers: {
    setTopInfluencers(state, action) {
      state.topInfluencers = action.payload;
    },
  },
  extraReducers: {
    [getTopInfluencers.pending]: (state) => {
      state.loading = true;
    },
    [getTopInfluencers.fulfilled]: (state, { payload }) => {
      state.topInfluencers.push(...payload);
      state.loading = false;
    },
    // builder.addCase(getTopInfluencers.)
    // builder.addCase(getTopInfluencers.fulfilled, (state, { payload }) => {
    //   const topInfluencers = payload;
    //   state.topInfluencers.push(...topInfluencers);
    //   // state.influencers.topInfluencers = topInfluencers;
    // });
  },
});

export const { setTopInfluencers } = influencersSlice.actions;

export const selectInfluencers = (state) => state.influencers;
export const selectTopInfluencers = (state) => state.influencers.topInfluencers;

export default influencersSlice.reducer;
