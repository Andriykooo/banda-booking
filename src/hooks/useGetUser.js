import { useEffect, useState } from 'react';
import { usersAPI } from '../api/auth-request';

export const useGetUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    usersAPI.getUser(localStorage.getItem('token')).then((user) => {
      setUser(user);
    });
  }, []);

  return user;
};
