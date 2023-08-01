import { atom } from 'recoil'

export const createTicketState = atom({
  key: 'createTicket-state',
  default: {
    image: null ,
    report: '',
    reportError:'',
    location: '',
    locationError: '',
  }
})
export const ticketState = atom({
    key: 'getTicket-state',
    default: {
        ticket_history: [],
        imageData: '',
    }
})