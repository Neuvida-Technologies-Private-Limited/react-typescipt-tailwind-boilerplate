import React from 'react';
import { Steps } from 'antd';
import moment from 'moment';

interface StepsProps {
  ticketID: string;
  created: string;
  modified: string;
  status: string;
}

const Index: React.FC<StepsProps> = ({ created, modified, status }) => {
  const formattedCreated = moment(created).format('MMMM Do YYYY, h:mm:ss a z');
  const formattedModified = moment(modified).format('MMMM Do YYYY, h:mm:ss a z');

  const items = [
    {
      title: 'Created',
      description: formattedCreated, 
    },
    {
      title: `${status}`,
      description: formattedModified, 
    },
  ];
  let currentStep = 1;
  let percent = 30;

  if (status === 'RESOLVED' || status === 'FALSE_ALARM') {
    currentStep = 2;
    percent = 100;
  }else if(status === 'ASSIGNED'){
    currentStep = 1;
    percent = 60;
  }
  return (
    <>
      <Steps
        current={currentStep}
        percent={percent}
        direction="vertical"
        items={items}
        size="small"
        className='font-poppins text-xs'
      />
    </>
  );
};

export default Index;
