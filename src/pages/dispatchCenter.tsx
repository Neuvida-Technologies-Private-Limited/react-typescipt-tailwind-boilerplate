import React from "react";
import { Header, Footer, SideBar } from "../components/common";
import { Outlet } from "react-router-dom";
import { DispatchCenterItems } from "../utils/constants";



const DispatchCenter: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header
        src="/assets/icons/avatar.svg"
        heading="Dispatch Center's Dashboard"
      />
      <div className="flex">
        <SideBar items={DispatchCenterItems} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DispatchCenter;
