import { AxiosError } from "axios";
import axiosClient from "../axios-client/axios-client-protected";
import { CreateTicketModel } from "./types";
import { ticketRoutes } from "./routes";

//create ticket
export const CreateTicket = async (model: CreateTicketModel) => {
  await axiosClient
    .post(ticketRoutes.CREATE_TICKET_ROUTE, model)
    .then((response) => {
       
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
};

//get ticket
export const GetTicket = async () => {
  await axiosClient
    .get(ticketRoutes.GET_TICKET_ROUTE)
    .then((response) => {

    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
};
