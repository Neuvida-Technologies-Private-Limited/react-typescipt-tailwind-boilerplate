import React from "react";
import { Header, Footer, SideBar } from "../components/common";
import { Outlet } from "react-router-dom";

const items = [
  { key: "/firefighter", label: "Dashboard" },
  { key: "/firefighter/profile", label: "Profile" },
];

const FireFighter: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header
        src="/assets/icons/avatar.svg"
        heading="Fire Fighter's Dashboard"
      />
      <div className="flex">
        <SideBar items={items} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default FireFighter;
