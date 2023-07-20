import React from "react";
import { Header, Footer, SideBar } from "../components/common";
import { Outlet } from "react-router-dom";

const items = [
  { key: "/dispatch_center", label: "Report an Incident" },
  { key: "/dispatch_center/history", label: "History" },
  { key: "/dispatch_center/profile", label: "Profile" },
];

const DispatchCenter: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header
        src="/assets/icons/avatar.svg"
        heading="Dispatch Center's Dashboard"
      />
      <div className="flex">
        <SideBar items={items} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DispatchCenter;
