import React from "react";

interface InputProps {
  name: string;
  className?: string;
}

const Label: React.FC<InputProps> = ({
  name,
  className
}) => {

  return (
    <label className={`${className} block leading-6 text-gray-900 font-poppins mb-2`}>
        {name}
    </label>       
  );
};

export default Label;