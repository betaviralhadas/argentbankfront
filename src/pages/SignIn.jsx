import React from "react";
import "../css/main.css";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignIn = () => {
    return (
        <>
            {<Header />}
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </main>
            {<Footer />}
        </>
    )
}
export default SignIn;