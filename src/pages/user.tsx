import React from 'react'
import { Logout } from '../components/common'

const User:React.FC = () => {
  return (
    <>
    <h1 className='mb-2'>Welcome user !</h1>
    <Logout />
    </>
  )
}

export default User