import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the shape of a user object
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the shape of the context value
interface AuthContextType {
  currentUser: User | null;
  login: (email: string, pass: string) => Promise<void>;
  signup: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
}

// Create the context with a default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component that wraps the app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Check for a logged-in user in localStorage on initial render
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('currentUser');
    }
  }, []);

  // Simulating a user database in localStorage
  const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  const setUsers = (users: any[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  const login = async (email: string, pass: string): Promise<void> => {
    const users = getUsers();
    // In a real app, passwords would be hashed. Here we do a plain text check for simulation.
    const user = users.find((u: any) => u.email === email && u.password === pass);
    if (user) {
      const { password, ...userToStore } = user; // Don't store password in currentUser state
      setCurrentUser(userToStore);
      localStorage.setItem('currentUser', JSON.stringify(userToStore));
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const signup = async (name: string, email: string, pass: string): Promise<void> => {
    const users = getUsers();
    if (users.some((u: any) => u.email === email)) {
      throw new Error('An account with this email already exists.');
    }
    const newUser = { id: Date.now(), name, email, password: pass }; // Storing pass in plain text for simulation
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    const { password, ...userToStore } = newUser;
    setCurrentUser(userToStore);
    localStorage.setItem('currentUser', JSON.stringify(userToStore));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
