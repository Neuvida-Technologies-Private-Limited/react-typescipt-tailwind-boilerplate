import { Outlet, Navigate } from "react-router-dom";
import { TOKENS } from "../constants";
import { GetStorage } from "../../infra/cache";

interface PrivateRoutesProps {
  roleRequired: string;
}

const useAuth = () => {
  // get the token
  const access_token: string | null = GetStorage(TOKENS.ACCESS_TOKEN);
  const user_type_token: string | null = GetStorage(TOKENS.USER_TYPE_TOKEN);

  if (access_token) {
    return {
      auth: true,
      user_type: user_type_token,
    };
  } else {
    return {
      auth: false,
      user_type: null,
    };
  }
};

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ roleRequired }) => {
  const { auth, user_type } = useAuth();

  return auth && roleRequired === user_type ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
