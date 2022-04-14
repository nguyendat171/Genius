import { API_URL } from './config';

export const endPoints = {
  auth: 'auth',
};

export const getEndPoint = (endpoint: string) => {
  return `${API_URL}/${endpoint}`;
};
