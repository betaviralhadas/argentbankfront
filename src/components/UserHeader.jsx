import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/argentBankLogo.png";
import "../css/main.css";

const userHeader = () => {
    return (
        <>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div className="edit-user-connect">
                    <NavLink className="nav-item" to="/User">
                        <p className="edit-user">Ben_hg</p>
                        <i className="fa fa-user-circle green"></i>
                    </NavLink>
                    <i class="fa-solid fa-gear green"></i>
                    <NavLink className="nav-item" to="/">
                        <i class="fa-solid fa-power-off green"></i>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}
export default userHeader;