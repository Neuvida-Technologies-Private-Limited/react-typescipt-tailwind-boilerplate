export type SigninModel = {
    email: string,
    password: string
}
export type CreateTicketModel = {
    image ?: File | undefined,
    report: string,
    location: string
}
