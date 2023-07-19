import React from 'react'
import {Space} from 'antd'
import { Header, Footer, SideBar } from '../components/common'
import { Outlet } from 'react-router-dom';

const items = [
  {key: '/user', label: 'Report an Incident'},
  {key: '/user/history', label: 'History'},
  {key: '/user/profile', label: 'Profile'},
];

const User:React.FC = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
    <Header src="/assets/icons/avatar.svg" heading="User's Dashboard"/>
    <Space className='flex justify-start items-start '>
      <SideBar items={items}/>
      <Outlet />
    </Space>
    <Footer />
    </div>
  )
}

export default User