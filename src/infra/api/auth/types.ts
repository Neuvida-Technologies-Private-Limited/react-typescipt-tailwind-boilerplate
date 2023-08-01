export type SigninModel = {
    email: string,
    password: string
}
export type CreateTicketModel = {
    
}
export type AssignDispatchCenterModel = {
    email: string,
    ticket_id: string
}
export type UpdateTicketStatusModel = {
    ticket_id: string
    status: string
}
