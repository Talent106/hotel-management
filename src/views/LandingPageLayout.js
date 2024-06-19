import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/index";
import Footer from "../components/footer/index";

const LandingPageLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

export default LandingPageLayout;