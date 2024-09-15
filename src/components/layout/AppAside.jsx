import Sider from 'antd/es/layout/Sider'
import React from 'react'

const asideStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
}

export default function AppAside() {
  return <Sider style={asideStyle}>Sider</Sider>
}
