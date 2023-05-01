import { axiosInstance } from '../common/axiosClient';

export const api = {
  get: <T>(url: string, params?: object) => axiosInstance.get<T>(url, { ...params }),
  post: <T>(url: string, data: any) => axiosInstance.post<T>(url, data, {}),
  patch: <T>(url: string, data: any) => axiosInstance.patch<T>(url, data),
  delete: <T>(url: string) => axiosInstance.delete<T>(url),
};
