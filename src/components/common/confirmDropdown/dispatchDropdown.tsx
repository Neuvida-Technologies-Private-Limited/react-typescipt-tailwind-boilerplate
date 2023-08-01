import React, { useState } from "react";
import { Select, Space, Modal } from "antd";
import {
  AssignDispatchCenter,
  UpdateTicketStatus,
} from "../../../infra/api/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface OptionItems {
  value: string;
  label: string;
}

interface DropdownProps {
  options: OptionItems[];
  placeholder: string;
  className?: string;
  ticketID: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  className,
  ticketID,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const updateTicketStatus = async (value:string) => {
    const updateTicketParams = {
      ticket_id: ticketID,
      status: value,
    };
    try {
      await UpdateTicketStatus(updateTicketParams);
    } catch (error: any) {
      const errorMessage = error.error.message;
      toast.warn(errorMessage);
    }
  };

  const handleChange = (value: string) => {
    Modal.confirm({
      title: "Confirmation",
      content: `Are you sure you want to select "${value}"?`,
      onOk() {
        setSelectedValue(value);
        updateTicketStatus(value);
      },
      onCancel() {
        // Handle when "Cancel" is clicked or modal is closed
        // console.log('Selection canceled');
        setSelectedValue(null); // Reset the selected value
      },
      okButtonProps: {
        style: { backgroundColor: "#1399fc" },
      },
    });
  };

  return (
    <>
      <Space wrap className={`flex ${className}`}>
        <Select
          value={selectedValue}
          placeholder={placeholder}
          className="w-full font-poppins"
          onChange={handleChange}
          options={options}
        />
      </Space>
      <ToastContainer />
    </>
  );
};

export default Dropdown;
