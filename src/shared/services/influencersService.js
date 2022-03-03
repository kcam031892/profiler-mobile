import { createAsyncThunk } from '@reduxjs/toolkit';
import { influencersDao } from 'shared/dao/influencersDao';

const { getTopInfluencers: getTopInfluencersDao } = influencersDao();
export const influencersService = () => {
  const getTopInfluencers = createAsyncThunk('influencers/top', async () => {
    const response = await getTopInfluencersDao();

    return response.data;
  });

  return {
    getTopInfluencers,
  };
};
