import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/main.css";
import Axios from "axios";

import { setToken, setLoginInfo } from "./MyStore";
import { useDispatch } from "react-redux";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const submit = (e) => {
        e.preventDefault();
        const data ={
            email: e.target[0].value,
            password: e.target[1].value,
        };
        
        Axios.post("http://localhost:3001/api/v1/user/login",data)
         .then((res)=>{
            dispatch(setLoginInfo(data));
            dispatch(setToken(res.data.body.token))
            navigate("/User")
         }).catch((error)=> {
            console.error("Invalide")
         })

    }

    return (
        <form onSubmit={submit}>
            <div className="input-wrapper">
                <label for="username">Username</label>
                <input onChange={(e)=> setMail(e.target.value)} type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label for="password">Password</label>
                <input onChange={(e)=> setPassword(e.target.value)} type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button" >Sign In</button>
        </form>
    )
}
export default Form;