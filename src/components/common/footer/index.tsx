import React from 'react'
import {FooterConst} from "../../../utils/constants"

const Footer = () => {
  return (
    <div className="flex items-center justify-center py-3 px-4 bg-blue-700">
       <div className="text-white font-semibold font-poppins text-lg">
       <h1>{FooterConst.Love}</h1>
      </div>
    </div>
  )
}

export default Footer