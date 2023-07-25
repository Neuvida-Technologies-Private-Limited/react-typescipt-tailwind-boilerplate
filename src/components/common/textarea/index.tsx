import React, { ChangeEvent, useState } from "react";

interface TextareaProps {
  className?: string,
  value : string,
  error: string,
  onChange: (value:string) => void;
}

const Index: React.FC<TextareaProps> = ({ className,value, error, onChange }) => {

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className={className}>
      <textarea
        value={value}
        onChange={handleChange}
        className='w-2/3 border border-gray-400 rounded-lg p-3 text-xs font-poppins h-24 resize-none focus:outline-none'
      />
    </div>
  );
};

export default Index;
