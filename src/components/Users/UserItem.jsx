import React from 'react'
import { Card, Col, Image } from 'antd'

export default function UserItem({ element }) {
  return (
    <Col span={12}>
      <Card>
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
