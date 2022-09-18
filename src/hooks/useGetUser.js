import { useEffect, useState } from 'react';

export const useGetUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, []);

  return user;
};
