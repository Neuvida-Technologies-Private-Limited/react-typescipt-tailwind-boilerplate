import { AxiosError } from 'axios';
import axiosClient from "../axios-client/axios-client-protected";
import { CreateTicketModel } from './types';
import { ticketRoutes } from './routes';

//create ticket
export const CreateTicket = async (model: CreateTicketModel) => {
    await axiosClient.post( ticketRoutes.CREATE_TICKET_ROUTE, model).then((response) => {
        console.log(response);
    }).catch((error: AxiosError) => {
    return Promise.reject(error);
    });
}