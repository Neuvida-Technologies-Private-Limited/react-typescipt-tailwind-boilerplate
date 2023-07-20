import React from 'react';
import { Select, Space } from 'antd';

interface OptionItems {
  value: string,
  label: string
}

interface DropdownProps {
options: OptionItems[],
placeholder: string,
}

const handleChange = (value: string) => {
  // console.log(`selected ${value}`);
};

const Dropdown: React.FC<DropdownProps> = ({options, placeholder}) => (
  <Space wrap className='flex mt-4' >
    <Select
      placeholder = {placeholder}
      className='w-full'
      onChange={handleChange}
      options={options}
    />
  </Space>
);

export default Dropdown;