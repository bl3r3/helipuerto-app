import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
