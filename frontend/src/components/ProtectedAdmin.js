import React,{useState,useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { register } from "../api/index";

const ProtectedAdmin = ({ children }) => {
  const { user } = UserAuth();
  const [profile_role, setRole] = useState();

    async function userlogin() {
        const email = user.email;
        const role = "user";
        const data = await register(email, role);
        console.log(data?.data?.data[0].role);
        setRole(data?.data?.data[0].role);
      }
      useEffect(() => {
        if (user) {
          userlogin();
        }
      }, [user]);



  if (profile_role === "user" || profile_role === undefined) {
    return <Navigate to='/' />;
  }

  return children;
};

export default ProtectedAdmin;
