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

  getUser() {
    const url = `${api.schema + api.base + api.getToken}`;
    const token = localStorage.getItem('token');

    return instance
      .get(url, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  },

  getMeetingRoom(roomName, timeFrom, timeTo) {
    const url = `${
      api.schema + api.base + api.meeting_room + api.booked_time
    }?roomName=${roomName}&timeFrom=${timeFrom}&timeTo=${timeTo}`;

    const token = localStorage.getItem('token');

    return instance
      .get(url, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  },

  postMeetingRoom(roomToSet) {
    const url = `${api.schema + api.base + api.meeting_room + api.booking + api.create}`;
    const token = localStorage.getItem('token');

    return instance
      .post(
        url,
        {
          ...roomToSet,
        },
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

  deleteMeetingRoom(userId, roomId) {
    const url = `${api.schema + api.base + api.meeting_room + api.booking`/${userId}` + api.remove}`;
    const token = localStorage.getItem('token');

    return instance.delete(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
    });
  },
};
