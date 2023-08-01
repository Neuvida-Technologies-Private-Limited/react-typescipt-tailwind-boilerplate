import React from 'react';
import { Steps } from 'antd';

const items = [
  {
    title: 'Created',
    description: '2023-07-28T22:12:37.005Z',
  },
  {
    title: 'Assigned',
    description: '2023-07-29T22:08:11.102Z',
  },
  {
    title: 'Waiting',
    description: '',
  },
];
const Index: React.FC = () => (
  <>
    <Steps current={2} percent={30} direction="vertical" items={items} size="small" className='font-poppins text-xs'/>
  </>
);

export default  Index;