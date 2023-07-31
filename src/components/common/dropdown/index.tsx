import React from 'react';
import { Select, Space } from 'antd';

interface OptionItems {
  value: string,
  label: string
}

interface DropdownProps {
options: OptionItems[],
placeholder: string,
className ?:string,
onChange : (value: string) => void,
reportValue?: string,
error?: string,
}

const Dropdown: React.FC<DropdownProps> = ({options, placeholder, className, onChange, error,reportValue}) => (
  <Space wrap className={`flex ${className}`}  >
    <Select
      placeholder = {placeholder}
      className='w-full font-poppins'
      onChange={onChange}
      options={options}
      value={reportValue}
    />
  </Space>
);

export default Dropdown;