import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setLoginInfo, setFirstName } from "./MyStore";
import Axios from "axios";
import "../css/main.css";

function Form() {
    // Initialization of local states
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handler for submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Obtaining form data
        const data = {
            email: e.target[0].value,
            password: e.target[1].value,
        };
        console.log(data)

        // POST request to the login endpoint
        Axios.post("http://localhost:3001/api/v1/user/login", data)
            .then((response) => {
                // Update state using Redux actions
                dispatch(setLoginInfo(data));
                dispatch(setToken(response.data.body.token));
                dispatch(setFirstName(response.data.body.firstName));
                // Navigation to user page after successful login
                console.log(response)
                navigate("/User");
            })
            .catch((error) => {
                console.error("Cet identifiant ou ce mot de passe est inconnu, veuillez réessayer.");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username" className="labell">Username:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password" className="labell">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
                Sign In
            </button>
        </form>
    )
}
export default Form;