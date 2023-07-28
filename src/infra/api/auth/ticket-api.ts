import { AxiosError } from "axios";
import axiosClientProtected from "../axios-client/axios-client-protected";
import  axiosClientCreateTicketProtected from "../axios-client/axios-client-create-ticket-protected";
import { CreateTicketModel } from "./types";
import { ticketRoutes } from "./routes";

//create ticket
export const CreateTicket = async (model: CreateTicketModel) => {
  await axiosClientCreateTicketProtected
    .post(ticketRoutes.CREATE_TICKET_ROUTE, model)
    .then((response: any) => {
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
};

//get ticket
export const GetTicket = async () => {
  try {
    const response = await axiosClientProtected.get(ticketRoutes.GET_TICKET_ROUTE);
      return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
