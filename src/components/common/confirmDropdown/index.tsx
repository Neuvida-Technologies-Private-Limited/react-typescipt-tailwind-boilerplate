import React, { useState } from 'react';
import { Select, Space, Modal } from 'antd';

interface OptionItems {
  value: string;
  label: string;
}

interface DropdownProps {
  options: OptionItems[];
  placeholder: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, className }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (value: string) => {
    Modal.confirm({
      title: 'Confirmation',
      content: `Are you sure you want to select "${value}"?`,
      onOk() {
        // Handle selection when "Ok" is clicked
        // console.log(`Selected "${value}"`);
        setSelectedValue(value);
      },
      onCancel() {
        // Handle when "Cancel" is clicked or modal is closed
        // console.log('Selection canceled');
        setSelectedValue(null); // Reset the selected value
      },
      okButtonProps: {
        style: { backgroundColor: '#1399fc'},
      },
    });
  };

  return (
    <Space wrap className={`flex ${className}`}>
      <Select
        value={selectedValue}
        placeholder={placeholder}
        className="w-full font-poppins"
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default Dropdown;
