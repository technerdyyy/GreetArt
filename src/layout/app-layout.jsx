import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="min-h-screen mx-15">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
