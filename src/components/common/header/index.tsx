import React from "react";
import Logout from "../logout";

interface HeaderProps {
  src: string;
  heading: string;
}
const header: React.FC<HeaderProps> = ({ src, heading }) => {
  return (
    <div className="flex justify-between py-3 px-4 bg-blue-700 items-center	">
      <div className="w-10 cursor-pointer">
        <img src={src} alt="" />
      </div>
      <div className="text-white font-semibold font-poppins text-lg">
        <h1>{heading}</h1>
      </div>
      <div className="">
        <Logout />
      </div>
    </div>
  );
};

export default header;
