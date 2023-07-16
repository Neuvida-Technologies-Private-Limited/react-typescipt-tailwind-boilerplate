import React from 'react'
//constants
import { Login } from '../utils/constants';
// components
import { Button, Input, Label } from '../components/common';

const login: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center w-full h-full">
    <div className="flex flex-col justify-center px-6 py-24 lg:px-12 items-center w-full min-h-screen ">
      <div className="flex flex-col pb-12 rounded-3xl bg-white max-w-fit sm:px-8 md:px-14 lg:px-14 shadow-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm m-0 ">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 font-rubik">
            {Login.Login}
          </h2>
          <h6 className="mt-2 text-center text-1xl text-gray-500 font-rubik font-thin">
            {Login.EnterDetails}
          </h6>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="lg:w-96 md:w-80 sm:64"
            action="#"
            method="POST"
          >
            <Label name={Login.Email}/>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="johndoeatdesign@xyz.com"
              className="w-full mt-4"
            //   onChange= {''}
              value={''}
              error={''}
            />
            <Label name={Login.Password} className="mt-4"/>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="******"
              className="w-full mt-4"
            //   onChange= {''}
              value= {''}
              error={''}
            />
            <Button name="Submit" className="md:py-4 sm:py-2 mt-4 bg-vividTangerine hover:bg-internationalOrange hover:shadow-orange-200 hover:shadow-lg transition text-white" />
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default login