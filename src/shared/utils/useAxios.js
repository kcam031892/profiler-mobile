/* eslint-disable no-console */
import axios from 'axios';
import { CONFIG } from 'shared/config/config';

export const useAxios = () => {
  const instance = axios.create({
    baseURL: CONFIG.API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtbWlfYXBpIiwiZXhwIjoxNjQ2MjczMjk0fQ.orQO4KuBK5tlN7ExaZ8NLV8BCYWERTAvq6kTxMYu-Ro',
    },
  });

  instance.interceptors.request.use(
    (request) => {
      if (CONFIG.isDevelopment) {
        console.log(
          `%c ${request?.method} request for ${request.url}\n`,
          'color:white;background-color:#fa8c16;padding:5px;border-radius:5px;',
          request.data
        );
        console.log({ params: request.params });
      }
      return request;
    },
    (error) => {
      if (CONFIG.isDevelopment) console.log(error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      if (CONFIG.isDevelopment) {
        console.log(
          `%c response from ${response.config.url}\n`,
          'color:white;background-color:#1890ff;padding:5px;border-radius:5px;',
          response.data
        );
      }

      return response;
    },
    (error) => {
      if (CONFIG.isDevelopment) console.log(error);
      return Promise.reject(error);
    }
  );

  const GET = async (args) => {
    console.log('args', args);

    try {
      return await instance({
        ...args,
        method: 'GET',
      });
    } catch (e) {
      throw e;
    }
  };

  const POST = async (args) => {
    try {
      return await instance({
        ...args,
        method: 'POST',
      });
    } catch (e) {
      throw e;
    }
  };

  const PUT = async (args) => {
    try {
      return await instance({
        ...args,
        method: 'PUT',
      });
    } catch (e) {
      throw e;
    }
  };

  const DELETE = async (args) => {
    try {
      return await instance({
        ...args,
        method: 'PUT',
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    instance,
    GET,
    POST,
    PUT,
    DELETE,
  };
};
