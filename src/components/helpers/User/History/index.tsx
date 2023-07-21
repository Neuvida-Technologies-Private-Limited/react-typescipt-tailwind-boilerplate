import React from 'react'
import { Label, IconButton } from '../../../common'
import { UserHistory } from '../../../../utils/constants'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
};
const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Active`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Resolved`,
    children: `Content of Tab Pane 2`,
  },
];

const History = () => {
  return (
    <div className='px-4 py-2 w-5/6'>
      <div className="flex justify-between items-start">
      <Label
        name={UserHistory.History}
        className="font-bold text-xl text-blue-700 mt-2"
      />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='font-poppins'/>
      <IconButton name={UserHistory.Refresh} className='bg-green-500 h-10 hover:shadow-md hover:bg-green-600 hover:shadow-green-300 transition-all ease-in-out duration-300' />
      </div>
    </div>
  )
}

export default History