import React from "react";
import { Header, Footer, SideBar } from "../components/common";
import { Outlet } from "react-router-dom";
import { UserItems } from "../utils/constants";



const User: React.FC = () => {
  return (
    <div className="user flex flex-col justify-between h-screen">
      <Header src="/assets/icons/avatar.svg" heading="User's Dashboard" />
      <div className="flex">
        <SideBar items={UserItems}/>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default User;
