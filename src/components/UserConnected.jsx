import React from "react";
import { NavLink } from 'react-router-dom';
import { setToken, setFirstName, setLogout } from "./MyStore";
import { useDispatch, useSelector } from "react-redux";

const UserConnect = () => {
    const firstName = useSelector((state)=> state?.user?.firstName);
    const dispatch = useDispatch();
    const token = useSelector((state)=> state?.user?.token);

    const handleLogout = () => {
        dispatch(setLogout());
    }
    const handleLogin = () => {
        dispatch(setFirstName(firstName));
    }

    if(token) {
        return(
            <div className="user-connect">
        <NavLink className="main-nav-item" to="/User">
          <i className="fa fa-user-circle"></i>
          <p>{firstName}</p>
        </NavLink>
        <NavLink onClick={handleLogout} className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
        )
    }else {
        return(
            <div>
                <NavLink onClick={handleLogin} className="main-nav-item" to="/SignIn">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        )
    }
} 
export default UserConnect;