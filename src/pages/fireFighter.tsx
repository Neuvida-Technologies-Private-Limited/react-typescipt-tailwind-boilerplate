import React from "react";
import { Header, Footer, SideBar } from "../components/common";
import { Outlet } from "react-router-dom";
import { FireFighterItems } from "../utils/constants";


const FireFighter: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        src="/assets/icons/avatar.svg"
        heading="Fire Fighter's Dashboard"
      />
      <div className="flex">
        <SideBar items={FireFighterItems} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default FireFighter;
