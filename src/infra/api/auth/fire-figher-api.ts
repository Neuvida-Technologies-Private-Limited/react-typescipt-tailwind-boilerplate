import axiosClient from "../axios-client/axios-client-create-ticket-protected";
import { fireFighterRoutes } from "./routes";

//get profile details
export const GetDispatchCenterList = async () => {
    try {
      const response = await axiosClient.get(fireFighterRoutes.GET_DISPATCH_CENTER_ROUTE)
        return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };