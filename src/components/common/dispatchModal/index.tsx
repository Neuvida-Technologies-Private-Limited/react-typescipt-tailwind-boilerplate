import React, { useState } from "react";
import { Modal } from "antd";
import { DispatchDropdown } from "..";
import IconButton from "../icon-button";
import { options } from '../../../utils/constants';

interface ModalProps {
  ticketID: string;
}

const Index: React.FC<ModalProps> = ({ ticketID }) => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setModal2Open(true)}
        className="border-2 border-blue-500 bg-blue-300 hover:bg-blue-500 transition py-1"
        name="Choose"
      />
      <Modal
        title="Set the Status for the ticket"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{ style: { backgroundColor: "#1399fc" } }}
      >
        <DispatchDropdown
          options={options}
          placeholder="Set Status"
          className="w-1/2"
          ticketID={ticketID}
        />
      </Modal>
    </>
  );
};

export default Index;
