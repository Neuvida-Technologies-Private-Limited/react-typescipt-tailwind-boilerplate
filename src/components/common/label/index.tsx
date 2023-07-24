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
    <label className={`${className} block font-poppins mb-2`}>
        {name}
    </label>       
  );
};

export default Label;