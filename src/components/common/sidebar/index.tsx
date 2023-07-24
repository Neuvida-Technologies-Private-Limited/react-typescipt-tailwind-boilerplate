import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

interface LinkItem {
  key: string;
  label: string;
}
interface SideBarProps {
  items: LinkItem[];
}

const Sidebar: React.FC<SideBarProps> = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div className="w-fit border-r-2 bg-white h-perfect">
      <Menu className="font-poppins" onClick={(item) => {
        navigate(item.key);
      }} items={items} />
    </div>
  );
};

export default Sidebar;
