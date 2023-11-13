import React from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";

const userHeader = () => {
    return (
        <>
            <nav className="nav-user">
                <NavLink className="user-logo" to="/">
                    <i className="fa-solid fa-vault"></i>
                    <p><strong>Argent </strong> Bank</p>
                </NavLink>
                <div className="edit-user-connect">
                    <NavLink className="nav-item" to="/User">
                        <p className="edit-user">Ben_hg</p>
                        <i className="fa fa-user-circle green"></i>
                    </NavLink>
                    <i className="fa-solid fa-gear green"></i>
                    <NavLink className="nav-item" to="/">
                        <i className="fa-solid fa-power-off green"></i>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}
export default userHeader;