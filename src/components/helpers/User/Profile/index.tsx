import React from 'react'
import { Label } from '../../../common'
import { UserProfile } from '../../../../utils/constants'


const Profile = () => {
  return (
    <div className='pl-4 w-5/6'>
      <Label
        name={UserProfile.Profile}
        className="font-bold text-xl text-blue-700 w-1/4 mt-4"
      />
      <div className="flex flex-col border-2 p-2 rounded-md w-1/3 bg-white">
      <div className="flex justify-start">
      <Label
        name={UserProfile.Name}
        className="font-bold text-sm w-1/3"
      />
      <p className="font-poppins text-sm">
        {UserProfile.Joe}
      </p>
      </div>
      <div className="flex">
      <Label
        name={UserProfile.Email}
        className="font-bold text-sm w-1/3"
      />
      <p className="font-poppins text-sm">
        {UserProfile.UserEmail}
      </p>
      </div>
      </div>
    </div>
  )
}

export default Profile