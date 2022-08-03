import React from "react";
import { Navigate, Outlet } from "react-router-dom";
 const ProtectedRoute = () =>{
  let login=localStorage.getItem('login') === "true"? true:false
  // let login = false;

  return (
    login ? <Outlet/> : <Navigate to = "/"/>
  )
}
export default ProtectedRoute;