import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
//components
import { Label } from "../../common";
//constants
import { UserProfile } from "../../../utils/constants";
//APIs
import { GetProfile } from "../../../infra/api/auth";
//states
import { profileState } from "../../../infra/state";

const Profile: React.FC = () => {
  const [state, setState] = useRecoilState(profileState);
  const { first_name, last_name, email, user_type } = state;

  const getProfile = async () => {
    try {
      const res = await GetProfile();
      setState((old) => ({
        ...old,
        first_name: res.first_name,
        last_name: res.last_name,
        email: res.email,
        user_type: res.user_type,
      }));
    } catch (error: any) {
      const errorMessage = error.error.message;
      toast.warn(errorMessage);
    }
  };

  useEffect(() => {
    getProfile();
  });

  return (
    <div className="pl-4 w-5/6">
      <Label
        name={UserProfile.Profile}
        className="font-bold text-xl text-blue-700 w-1/4 mt-4"
      />
      <div className="flex flex-col border-2 p-2 rounded-md w-1/3 bg-white">
        <div className="flex justify-start">
          <Label
            name={UserProfile.FirstName}
            className="font-bold text-sm w-1/3"
          />
          <p className="font-poppins text-sm">{first_name}</p>
        </div>
        <div className="flex justify-start">
          <Label
            name={UserProfile.LastName}
            className="font-bold text-sm w-1/3"
          />
          <p className="font-poppins text-sm">{last_name}</p>
        </div>
        <div className="flex">
          <Label name={UserProfile.Email} className="font-bold text-sm w-1/3" />
          <p className="font-poppins text-sm">{email}</p>
        </div>
        <div className="flex">
          <Label
            name={UserProfile.UserType}
            className="font-bold text-sm w-1/3"
          />
          <p className="font-poppins text-sm">{user_type}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
