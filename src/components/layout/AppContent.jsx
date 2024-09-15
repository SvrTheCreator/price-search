import { Content } from 'antd/es/layout/layout'
import React from 'react'
import Monitors from '../Monitors/Monitors'

import { Routes, Route } from 'react-router-dom'
// import Monitors from './../TV/Monitors'

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // margin: '0% auto',
  // maxWidth: '70%',
  // width: '100vw',
  // minHeight: '800px',
  // textAlign: 'center',
}

export default function AppContent() {
  return (
    <div style={contentStyle}>
      <img
        width={'50%'}
        src='https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/08/23/11/5553518/20b027491f7209ca6f58a3ccc4983183b270ca4a.jpg'
        alt='zavod'
      />
    </div>
    // <Routes style={contentStyle}>
    //   {/* <Route path='/' element={<AppContent />} /> */}
    //   {/* <Route path='/' element={<Content />} /> */}
    //   <Route path='/tv' element={<Tv />} />
    //   {/* <Content style={contentStyle}>
    //     <Tv />
    //   </Content> */}
    // </Routes>
  )
}
