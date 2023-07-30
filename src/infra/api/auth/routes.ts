export enum authRoutes { 
    LOGIN_ROUTE = '/v1/access/login',
    VERIFY_USER = '/v1/access/verify_user'
}
export enum ticketRoutes {
    CREATE_TICKET_ROUTE = '/v1/ticket/create_ticket',
    GET_TICKET_ROUTE = '/v1/ticket/get_ticket_history',
    UPDATE_TICKET_STATUS = '/v1/ticket/update-ticket-status',
} 
export enum profileRoutes {
    GET_PROFILE_ROUTE = '/v1/access/get_profile_details',
}
export enum fireFighterRoutes {
    GET_DISPATCH_CENTER_ROUTE = '/v1/access/get-disptach-center',
    ASSIGN_DISPATCH_CENTER = '/v1/ticket/assign-dispatch-center',
}