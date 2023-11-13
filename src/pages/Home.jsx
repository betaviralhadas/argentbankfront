import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            {<Header />}
            <main>
                {<Banner />}
                {<Features />}
            </main>
            {<Footer />}
        </>
    );
}
export default Home;