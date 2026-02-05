import {useContext, createContext, useEffect, useState} from "react";

import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const verifyUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3002/auth/verify",
        { withCredentials: true }
      );
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

   
  useEffect(() => {
    verifyUser();
  }, []);
     
    const logout = async () => {
      const res = await axios.post(
        "http://localhost:3002/auth/logout",
        {},
        { withCredentials: true }
      );
      
        console.log(res.data);
        setUser(null);
        window.location.href = "http://localhost:3000/login";
    };

    return (
        <AuthContext.Provider value={{ user, loading,verifyUser, logout}}>
            {children}
        </AuthContext.Provider>
    );  
};

export const useAuth = () => useContext(AuthContext);