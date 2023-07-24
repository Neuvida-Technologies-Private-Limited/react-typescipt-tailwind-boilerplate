import React from 'react';

interface ButtonProps {
  className ?: string,
  name: string,
}

const button: React.FC<ButtonProps> = ({className, name}) => {
  return (
    <button
      type="submit"
      className={`${className} 
        flex justify-center 
        rounded-md  
        md:px-2 text-sm font-semibold 
        leading-6 shadow-sm 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        font-poppins sm:font-thin md:font-semibold`}
    >
      {name}
    </button>
  )
}

export default button