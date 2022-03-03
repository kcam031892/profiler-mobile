import { combineReducers } from '@reduxjs/toolkit';
import influencersReducer from './slicers/influencers.slice';
import bestFriendsReducer from './slicers/bestfriends.slice';

export const reducer = combineReducers({
  influencers: influencersReducer,
  bestFriends: bestFriendsReducer,
});
