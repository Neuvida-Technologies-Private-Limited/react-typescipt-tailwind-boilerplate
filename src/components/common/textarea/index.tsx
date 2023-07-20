import React, { ChangeEvent, useState } from 'react'

interface TextareaProps {
    className ?: string,
}

const Index: React.FC<TextareaProps> = ({className}) => {
    const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <textarea value={text} onChange={handleChange} className={`${className} resize-none focus:outline-none`} />
  )
}

export default Index