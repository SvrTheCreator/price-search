import React from 'react'
import { Card, Col, Image } from 'antd'

export default function UserItem({ element }) {
  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
      <Card
        style={{
          margin: '0 auto',
          cursor: 'pointer',
          width: '100%',
          minHeight: '300px',
          wordBreak: 'break-word',
        }}
      >
        <div>{element.id}</div>
        <div>{element.title}</div>
        <div>{element.body}</div>
        {/* <div>{element.username}</div>
        <div>{element.phone}</div>
        <a>{element.website}</a> */}
        {/* <Image preview={false} width={200} height={200} src={element.url} /> */}
      </Card>
    </Col>
  )
}
