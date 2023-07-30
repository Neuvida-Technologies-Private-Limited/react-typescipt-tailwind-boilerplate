import { AxiosError } from "axios";
import axiosClientCreateTicketProtected from "../axios-client/axios-client-create-ticket-protected";
import axiosClientProtected from "../axios-client/axios-client-protected";
import { fireFighterRoutes } from "./routes";
import { AssignDispatchCenterModel } from "./types";

//get dispatch center list
export const GetDispatchCenterList = async () => {
  try {
    const response = await axiosClientCreateTicketProtected.get(
      fireFighterRoutes.GET_DISPATCH_CENTER_ROUTE
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

//assign ticket to dispatch center
export const AssignDispatchCenter = async (
  model: AssignDispatchCenterModel
) => {
  await axiosClientProtected
    .post(fireFighterRoutes.ASSIGN_DISPATCH_CENTER, model)
    .then((response: any) => {})
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
  try {
  } catch (error) {}
};
