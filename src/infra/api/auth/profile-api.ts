import axiosClient from "../axios-client/axios-client-protected";
import { profileRoutes } from "./routes";

//get profile details
export const GetProfile = async () => {
    try {
      const response = await axiosClient.get(profileRoutes.GET_PROFILE_ROUTE)
        return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };