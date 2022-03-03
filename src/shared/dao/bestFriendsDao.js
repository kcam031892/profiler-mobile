import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/utils/useAxios';

const { GET } = useAxios();
export const bestFriendsDao = () => {
  const getBestFriends = async (handler) => {
    const response = await GET({
      url: `${ENDPOINTS.INFLUENCERS}/${handler}/internet_bestfriends`,
    });

    return response.data;
  };

  return {
    getBestFriends,
  };
};
