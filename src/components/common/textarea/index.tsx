import React, { ChangeEvent, useState } from "react";

interface TextareaProps {
  className?: string;
}

const Index: React.FC<TextareaProps> = ({ className }) => {
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <div className={className}>
      <textarea
        value={text}
        onChange={handleChange}
        className='w-2/3 border border-gray-400 rounded-lg p-3 text-xs font-poppins h-24 resize-none focus:outline-none'
      />
    </div>
  );
};

export default Index;
