import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          'https://mentorshipbackend-fetn.onrender.com/api/profile/getUserData',
          { withCredentials: true }
        );
        setUser(res.data?.userData);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};


