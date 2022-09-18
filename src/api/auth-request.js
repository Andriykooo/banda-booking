

import {api} from "./constants";
import instance from "./request";

export const usersAPI = {
  loginUser(email, password) {
    const url = `${api.schema + api.base + api.login}`;
    const params = {email, password};
    return instance.post(url, {
      params
    })
      .then(response => {
        return response.data
      })
  },
}
