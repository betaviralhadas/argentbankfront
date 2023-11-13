import React from "react";
import { NavLink } from 'react-router-dom';
import "../css/main.css";
import Logo from "../img/argentBankLogo.webp";
import UserConnect from "./UserConnected";

const Header = () => {
    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {<UserConnect />}
        </nav>
    )
}
export default Header;