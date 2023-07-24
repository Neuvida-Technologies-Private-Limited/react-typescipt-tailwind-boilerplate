import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  // console.log(`selected ${value}`);
};

const Dropdown: React.FC = () => (
  <Space wrap className='flex mt-4' >
    <Select
      placeholder = "Select Your Role"
      className='w-full '
      onChange={handleChange}
      options={[
        { value: 'user911', label: 'User' },
        { value: 'fire-fighter', label: 'Fire Fighter' },
        { value: 'Dispatch Center', label: 'Dispatch Center' },
      ]}
    />
  </Space>
);

export default Dropdown;