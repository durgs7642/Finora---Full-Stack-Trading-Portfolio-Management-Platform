// import React,{useState} from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect } from "react";


const Home = () => {
  const {user, loading, verifyUser} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    verifyUser();
  }, []);

  useEffect(() => {
    if(!loading && !user){
      navigate("/login");
    }
  },[loading, user]);

  if(loading) return null;
  
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );  
};

export default Home;
