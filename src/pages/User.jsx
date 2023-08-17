import React from "react";
import { NavLink } from "react-router-dom";
import Account from "../components/Account";
import Header from "../components/Header";

const User = () => {
    return (
        <>
        {<Header />}
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <NavLink className="edit-button" to="/EditUserName">Edit Name</NavLink>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {<Account />}
        </main>
        </>
    );
}
export default User;