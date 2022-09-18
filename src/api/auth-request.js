import { api } from './constants';
import instance from './request';

export const usersAPI = {
  signUp(email, password) {
    const url = `${api.schema + api.base + api.signUp}`;
    const params = { email, password };
    return instance
      .post(
        url,
        {
          ...params,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },

  logIn(email, password) {
    const url = `${api.schema + api.base + api.logIn}`;
    const token = 'Basic ' + btoa(unescape(encodeURIComponent(email + ':' + password)));

    return instance
      .post(
        url,
        {},
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: token,
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },

  getUser(token) {
    const url = `${api.schema + api.base + api.getToken}`;

    return instance
      .get(
        url,
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
};
