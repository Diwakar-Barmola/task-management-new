  import React from "react";
import { Outlet } from "react-router-dom";
  const Layout = () => {
  return (
    <div className="max-w-screen-sm mx-auto mt-10 p-5 shadow-sm border rounded">
       <Outlet />
    </div>
  );
};

export default Layout;  