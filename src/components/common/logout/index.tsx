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
      to={"/login"}
      onClick={HandleClick}
      className="p-2 bg-gray-300 rounded-md font-poppins w-fit cursor-pointer"
    >
      {Logout.Logout}
    </Link>
  );
};

export default index;
