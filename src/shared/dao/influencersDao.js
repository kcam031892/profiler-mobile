import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/utils/useAxios';

const { GET } = useAxios();
export const influencersDao = () => {
  const getTopInfluencers = async () => {
    const response = await GET({
      url: `${ENDPOINTS.INFLUENCERS}/top`,
    });

    return response.data;
  };

  return {
    getTopInfluencers,
  };
};
