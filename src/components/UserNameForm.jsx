import React from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";

const UserNameForm = () => {
    return (
        <>
        <h2 className="user-edit">Edit user info</h2>
        <form className="userEditForm">
            <div>
                <label for="username">User name: </label>
                <input className="input-user-edit" type="text" />
            </div>
            <div>
                <label for="firstname">First name: </label>
                <input className="input-user-edit" disabled="disabled" readOnly type="text" />
            </div>
            <div>
                <label for="lastname">Last name: </label>
                <input className="input-user-edit" disabled="disabled" readOnly type="text" />
            </div>
            <div className="button-edit-user">
                <NavLink className="button-user" to="/User">Save</NavLink>
                <NavLink className="button-user" to="/User">Cancel</NavLink>
            </div>
        </form>
        </>
    )
}
export default UserNameForm;