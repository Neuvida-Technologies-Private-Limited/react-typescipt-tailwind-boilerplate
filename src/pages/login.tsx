import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GetStorage } from "../infra/cache";
import "react-toastify/dist/ReactToastify.css";
//constants
import { LoginConst, TOKENS, USERS } from "../utils/constants";
// components
import { Button, Input, Label, Dropdown } from "../components/common";
//APIs
import { Signin } from "../infra/api/auth";
//validations
import { isEmailValidated, isPasswordValidated } from "../utils/validations";
// login state
import { loginState } from "../infra/state";

const options = [
  { value: 'user911', label: 'User' },
  { value: 'fire-fighter', label: 'Fire Fighter' },
  { value: 'Dispatch Center', label: 'Dispatch Center' },
]

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [state, setState] = useRecoilState(loginState);
  // destructuring params
  const { email, emailError, password, passwordError } = state;

  const handleEmailChange = (email: string) => {
    // update the email value
    setState((old) => ({
      ...old,
      email,
      emailError: isEmailValidated(email),
    }));
  };

  const handlePasswordChange = (password: string) => {
    // update the password
    setState((old) => ({
      ...old,
      password,
      passwordError: isPasswordValidated(password),
    }));
  };

  // reseting the states
  const resetLoginState = useResetRecoilState(loginState);

  const submitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // start the loading
    setState((old) => ({
      ...old,
      isLoading: true,
      emailError: isEmailValidated(email),
      passwordError: isPasswordValidated(password),
    }));

    const loginParams = {
      email,
      password,
    };

    try {
      await Signin(loginParams);
      const user_type_token: string | null = GetStorage(TOKENS.USER_TYPE_TOKEN);
      if (user_type_token === USERS.User) {
        navigate("/user");
      } else if (user_type_token === USERS.FireFighter) {
        navigate("/firefighter");
      } else if (user_type_token === USERS.DispatchCenter) {
        navigate("/dispatch_center");
      }
    } catch (error: any) {
      const errorMessage = error.error.message;
      toast.warn(errorMessage);
    }

    // end the loading
    setState((old) => ({
      ...old,
      isLoading: false,
    }));
    resetLoginState();
  };
  return (
    <div className="flex items-center flex-col justify-center w-full h-screen">
      <div className="flex flex-col justify-center px-6 py-24 lg:px-12 items-center w-full min-h-screen ">
        <div className="flex flex-col pb-12 rounded-3xl bg-white max-w-fit sm:px-8 md:px-14 lg:px-14 shadow-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm m-0 ">
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 font-rubik">
              {LoginConst.Login}
            </h2>
            <h6 className="mt-2 text-center text-1xl text-gray-500 font-rubik font-thin">
              {LoginConst.EnterDetails}
            </h6>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="login lg:w-96 md:w-80 sm:64"
              action="#"
              method="POST"
              onSubmit={submitHandler}
            >
              <Label name={LoginConst.Email} className=" text-sm font-medium" />
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="johndoeatdesign@xyz.com"
                className="w-full mt-4 border-2 border-gray-400 p-3"
                onChange={handleEmailChange}
                value={email}
                error={emailError}
              />
              <Label name={LoginConst.Password} className="mt-4  text-sm font-medium" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                className="w-full mt-4 border-2 border-gray-400 p-3"
                onChange={handlePasswordChange}
                value={password}
                error={passwordError}
              />
              <Label name={LoginConst.Role} className="mt-4  text-sm font-medium" />
              <Dropdown options={options} placeholder="Select the role"/>
              <Button
                name="Submit"
                className="md:py-4 sm:py-2 w-full mt-4 bg-vividTangerine hover:bg-internationalOrange hover:shadow-orange-200 hover:shadow-lg transition text-white"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
