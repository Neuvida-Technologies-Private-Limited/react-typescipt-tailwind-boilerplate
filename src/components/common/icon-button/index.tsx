import React from "react";
import {IoMdRefresh} from 'react-icons/io'

interface ButtonSmProps {
  className?: string;
  name: string;
  spanStyle?: string;
}

const iconButton: React.FC<ButtonSmProps> = ({
  className,
  name,
  spanStyle,
}) => {
  return (
    <button className={`${className} flex px-4 gap-2 font-poppins text-white items-center rounded-lg`}>
      <IoMdRefresh size={20}/>
      <span className={spanStyle}> {name}</span>
    </button>
  );
};

export default iconButton;
