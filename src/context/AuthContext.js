import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { signOutUser } from '../Helpers/Login';
import { errorToast } from '../Helpers/toast';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const isAdmin = [
        'sumanthale@gmail.com',
        'subramanian.dinesh@gmail.com',
        'eastwestnft1981@gmail.com',
      ].includes(user?.email);
      if (user) {
        if (isAdmin) {
          setUser(user);
        } else {
          errorToast(
            `${user.displayName} You Don't have permission to access ❌❌`
          );
          signOutUser();
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
