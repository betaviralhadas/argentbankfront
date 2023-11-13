import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { setUserName } from "../components/MyStore";
import Header from "../components/Header";
import Account from "../components/Account";
import Footer from "../components/Footer";

const User = () => {
  const loginInfos = useSelector((state) => state.user.loginInfo);
  const token = useSelector((state) => state.user.token);
  const [userName, setUserNames] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData()
  }, []);

  const getUserData = () => {
    Axios.post("http://localhost:3001/api/v1/user/profile", loginInfos, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const updatedUserName = response.data.body.userName;
        setUserNames(updatedUserName);
        dispatch(setUserName(updatedUserName));
      })
      .catch(function (error) {
        console.error("Token incorrect.");
        console.log(error);
      });
  };

  return (
    <>
      {<Header />}
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userName}</h1>
          <NavLink className="edit-button" to="/EditUserName">Edit Name</NavLink>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {<Account />}
      </main>
      {<Footer />}
    </>
  );
}
export default User;