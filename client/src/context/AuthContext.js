import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const register = async (email, password, userData) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.find(user => user.email === email)) {
        throw new Error('User already exists');
      }

      const newUser = {
        ...userData,
        email,
        password,
        id: Date.now().toString(),
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      setCurrentUser(newUser);
      
      return newUser;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  };

  const value = {
    currentUser,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
