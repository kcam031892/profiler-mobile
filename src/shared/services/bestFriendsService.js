import { createAsyncThunk } from '@reduxjs/toolkit';
import { bestFriendsDao } from 'shared/dao/bestFriendsDao';

const { getBestFriends: getBestFriendsDao } = bestFriendsDao();
export const bestFriendsService = () => {
  const getBestFriends = createAsyncThunk('influencers/bestfriends', async (handler) => {
    const response = await getBestFriendsDao(handler);
    return response.data;
  });

  return {
    getBestFriends,
  };
};
