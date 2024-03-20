import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Whatsapp from "../Whatsapp/Whatsapp";

const Layout = () => {
  return (
    <>
      <Whatsapp />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
