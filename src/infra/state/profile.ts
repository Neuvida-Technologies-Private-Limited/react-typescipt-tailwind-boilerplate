import { atom } from 'recoil'

export const profileState = atom({
  key: 'profile-state',
  default: {
    first_name: '',
    last_name: '',
    email: '',
    user_type: '',
  }
})
