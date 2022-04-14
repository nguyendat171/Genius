import Request from './request';
import { getEndPoint, endPoints } from './endpoints';
import { ParamsLogin } from './types';

const URL_API_LOGIN = getEndPoint(endPoints.auth);
export const login = (params: ParamsLogin) =>
  Request.post(URL_API_LOGIN, params);

export const checkLogin = ({ id }) => Request.get(`${URL_API_LOGIN}/${id}`);

export default {
  login,
  checkLogin,
};
