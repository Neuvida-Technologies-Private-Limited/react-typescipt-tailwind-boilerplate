import { atom } from 'recoil'

export const firefighterState = atom({
  key: 'firefighter-state',
  default: {
    options: [{
      value:[],
      label:[],
    }],
  }
})