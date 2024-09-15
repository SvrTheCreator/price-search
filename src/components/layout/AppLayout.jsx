import { Layout } from 'antd'
import React from 'react'
import AppHeader from './AppHeader'
import AppContent from './AppContent'
import Monitors from '../Monitors/Monitors'
import AppFooter from './AppFooter'
import AppAside from './AppAside'
import { Routes, Route } from 'react-router-dom'
import Users from '../Users/Users'
import MonitorsDetails from '../Monitors/MonitorsDetails'
import { Content } from 'antd/es/layout/layout'

const layoutStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  // height: '100vh',
  // borderRadius: 8,
  // overflow: 'hidden',
  //   width: 'calc(50% - 8px)',
  //   maxWidth: 'calc(50% - 8px)',
}

export default function AppLayout() {
  return (
    <Layout style={layoutStyle}>
      <AppHeader />
      <Content>
        <Routes style={{ flex: 1, padding: '24px', background: '#f0f2f5' }}>
          <Route path='/' element={<AppContent />} />
          <Route path='/monitors' element={<Monitors />} />
          <Route path='/monitors/:id' element={<MonitorsDetails />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  )
}
