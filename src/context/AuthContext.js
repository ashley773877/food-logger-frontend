import React, { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
 
const [isAuthenticated, setIsAuthenticated] = useState(false); // Add this line

  // const navigate = useNavigate();
  // const { signIn: authSignIn } = useAuth();

  const signIn = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/users/signin', userData);
      const { user } = response.data;
      console.log('user signed in', user)
      console.log('isAuthenticated after sign in:', isAuthenticated); 
      setUser(user);
      setIsAuthenticated(true)
      // authSignIn(user);
      // navigate('/');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false)
  };
  // const value = {
  //   user,
  //   signIn,
  //   signOut,
  //   isAuthenticated: !!user, 
  // };

  return (
    <AuthContext.Provider value={{user, signIn, signOut, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}
  const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


export  {AuthProvider, useAuth};

