import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
