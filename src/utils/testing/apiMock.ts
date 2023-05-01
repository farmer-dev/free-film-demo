import axios, { AxiosInstance } from 'axios';
// import { MockedFunction } from 'ts-jest';

const getMockedData = (originalUrl: string, mockData: { [url: string]: any }, type: string) => {
  const foundUrl = Object.keys(mockData).find((url) => originalUrl.match(new RegExp(`${url}$`)));

  if (!foundUrl) {
    return Promise.reject(new Error(`Called unmocked api ${type} ${originalUrl}`));
  }

  if (mockData[foundUrl] instanceof Error) {
    return Promise.reject(mockData[foundUrl]);
  }

  return Promise.resolve({ data: mockData[foundUrl] });
};

export const mockAxiosGetRequests = <T extends any>(mockData: {
  [url: string]: T;
}): jest.MockedFunction<AxiosInstance> => {
  // @ts-ignore
  return axios.get.mockImplementation((originalUrl) => getMockedData(originalUrl, mockData, 'GET'));
};
