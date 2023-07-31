import React, { ReactNode } from "react";
import { IoMdRefresh } from "react-icons/io";

interface ButtonSmProps {
  className?: string;
  name: string;
  spanStyle?: string;
  onClick: () => void;
  Icon?: ReactNode;
}

const IconButton: React.FC<ButtonSmProps> = ({
  className,
  name,
  spanStyle,
  onClick,
  Icon,
}) => {
  return (
    <button
      className={`${className} flex px-4 gap-2 font-poppins text-white items-center rounded-lg`}
      onClick={onClick}
    >
      {Icon}

      <span className={spanStyle}> {name}</span>
    </button>
  );
};

export default IconButton;
