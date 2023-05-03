import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL, OMDb_API } from './constants';

// const mock = new MockAdapter(axios, { delayResponse: 1000 });

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Note that browsers are overriding all user-agent headers
    // To test this value use non-browsers environment
    'Content-Type': 'application/json',
  },
});

axiosInstance?.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.params = config.params || {};
    // add any client instance specific params to config
    config.params['apikey'] = OMDb_API;
    config.params['plot'] = 'full';
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance?.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const {
      data: { Response, Error: error },
    } = response;

    if (!((Response as unknown as string).toLocaleLowerCase() === 'true')) {
      return Promise.reject(Error(error));
    }

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
