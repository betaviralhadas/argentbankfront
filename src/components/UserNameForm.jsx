import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {setUserName} from "./MyStore";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "../css/main.css";

const UserNameForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setuserName] = useState("");
    const [updateName, setupdateName] = useState(false);
    const token = useSelector((state) => state.user.token);

    const handleSave = (e) => {
        const userNameValue = document.getElementById("user-edit").value;
        if(userNameValue !== "") {
            e.preventDefault();
            setuserName(userNameValue);
            dispatch(setUserName(userNameValue));
            dataUser(userNameValue);
            setupdateName(userNameValue);
            navigate("/User");
        }else {
            console.error("remplissez le champ");
        }
    }
    const dataUser = (nameValue) => {
        const data = {
            userName: nameValue,

        }
        axios.put("http://localhost:3001/api/v1/user/profile", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                accept: "application/json",
                "Content-Type": "application/json",
              },
        }) 
        .then((res) => {
            console.log("success")
        })
        .catch(function (error) {
            console.error("Token incorrect.");
            console.log(error);
          });

    }
    return (
        <>
        <h2 className="user-edit">Edit user info</h2>
        <form className="userEditForm">
            <div>
                <label htmlFor="username">User name: </label>
                <input id="user-edit" className="input-user-edit" type="text" />
            </div>
            <div>
                <label htmlFor="firstname">First name: </label>
                <input className="input-user-edit" disabled="disabled" readOnly type="text" />
            </div>
            <div>
                <label htmlFor="lastname">Last name: </label>
                <input className="input-user-edit" disabled="disabled" readOnly type="text" />
            </div>
            <div className="button-edit-user">
                <button onClick={handleSave} className="button-user">Save</button>
                <NavLink className="button-user" to="/User">Cancel</NavLink>
            </div>
        </form>
        </>
    )
}
export default UserNameForm;