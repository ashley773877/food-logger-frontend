import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    // Perform authentication logic
    // Example: Make a request to your server to verify user credentials
    // If authentication is successful, set the user in the context

    // For demonstration purposes, let's assume the user is authenticated
    setUser(userData);
  };

  const signOut = () => {
    // Perform logout logic
    // Example: Clear user data from local storage or make a request to invalidate the token

    // For demonstration purposes, let's just clear the user
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


