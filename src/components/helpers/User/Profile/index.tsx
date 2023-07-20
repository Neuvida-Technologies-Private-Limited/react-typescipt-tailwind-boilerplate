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
    </div>
  )
}

export default Profile