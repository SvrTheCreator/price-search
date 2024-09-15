import React from 'react'
import { useState } from 'react'
import { Header } from 'antd/es/layout/layout'
import { Menu, Modal, Typography, Button, Drawer, Space } from 'antd'
import { Link } from 'react-router-dom'

const category = [
  {
    label: <Link to='/'></Link>,
    key: 'home',
    icon: <img style={{ width: '25px' }} src='/public/imgs/ZAVOD.png' alt='' />,
  },
  {
    label: <Link to='/tv'>TV</Link>,
    key: 'tv',
  },
  {
    label: <Link to='/users'>users</Link>,
    key: 'users',
  },
]
const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  width: '100%',
  paddingInline: 48,
  lineHeight: '64px',
  // backgroundColor: '#4096ff',
  backgroundColor: '#ffff',
  color: 'black',
}

export default function AppHeader() {
  const [current, setCurrent] = useState('home')
  const onClick = (e) => {
    // console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <Header style={headerStyle}>
      <Menu
        style={menuStyle}
        onClick={onClick}
        selectedKeys={[current]}
        mode='horizontal'
        items={category}
      />
    </Header>
  )
  // return <Header style={headerStyle}>Поиск цен в разных магазинах</Header>
}
