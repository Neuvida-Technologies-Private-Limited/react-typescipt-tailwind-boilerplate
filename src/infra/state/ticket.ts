import { atom } from 'recoil'

export const createTicketState = atom({
  key: 'createTicket-state',
  default: {
    image: '',
    report: '',
    reportError:'',
    location: '',
    locationError: '',
    status: '',
  }
})