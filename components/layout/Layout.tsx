import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="flex w-full h-full items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
