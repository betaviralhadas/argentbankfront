import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
        {<Header />}
        <main>
            {<Banner />}
            {<Features />}
        </main>
        </>
    );
}
export default Home;