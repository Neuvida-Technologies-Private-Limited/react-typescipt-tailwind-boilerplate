import React from "react";
import { Link } from "react-router-dom";
import { Logout, TOKENS } from "../../../utils/constants";
import { SetStorage } from "../../../infra/cache";

const index: React.FC = () => {
  const HandleClick = () => {
    SetStorage(TOKENS.ACCESS_TOKEN, "");
    SetStorage(TOKENS.REFRESH_TOKEN, "");
    SetStorage(TOKENS.USER_TYPE_TOKEN, "");
  };

  return (
    <Link
      to={"/"}
      onClick={HandleClick}
      className="py-2 px-4 bg-gray-300 rounded-md font-poppins w-fit cursor-pointer hover:shadow-md hover:shadow-blue-300 transition-all duration-200"
    >
      {Logout.Logout}
    </Link>
  );
};

export default index;
