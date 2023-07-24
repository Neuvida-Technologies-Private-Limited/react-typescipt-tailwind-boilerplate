import { atom } from 'recoil'

export const loginState = atom({
  key: 'login-state',
  default: {
    isLoading: false,
    isFormInvalid: false,
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  }
})
