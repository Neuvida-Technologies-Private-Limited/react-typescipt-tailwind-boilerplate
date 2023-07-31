import React, { useState } from 'react';
import { Modal } from 'antd';
import ConfirmDropdown from '../confirmDropdown';
import IconButton from '../icon-button';

const options = [
  {
    value: 'resolved',
    label: 'Resolved',
    email: '',
  },
  {
    value: 'false_alarm',
    label: 'False_Alarm',
    email: '',
  },
];

const Index: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <IconButton onClick={() => setModal2Open(true)} className='border-2 border-blue-500 bg-blue-300 hover:bg-blue-500 transition py-1' name='Choose' />
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{ style: { backgroundColor: "#1399fc"} }}
      >
        <ConfirmDropdown options={options} placeholder="Select" className="w-1/2" ticketID=""/>
      </Modal>
    </>
  );
};

export default Index;
