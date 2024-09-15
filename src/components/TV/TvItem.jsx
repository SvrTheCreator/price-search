import React from 'react'
import { Card, Col, Image } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function TvItem({ element }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/tv/${element.id}`) // Переход к деталям элемента
  }
  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
      <Card
        onClick={handleClick}
        style={{
          margin: '0 auto',
          cursor: 'pointer',
          width: '100%',
          minHeight: '300px',
          wordBreak: 'break-word',
        }}
        title={element.name}
      >
        {/* <div>{element.brandName}</div> */}
        <p style={{ width: '100%' }}>Модель: {element.name}</p>
        {/* <p>brandName: {element.brandName}</p> */}
        <p>
          Старая цена:{' '}
          <span style={{ textDecoration: 'line-through' }}>
            {element.base_price} &#x20BD;
          </span>
        </p>
        <p>Новая цена: {element.sale_price} &#x20BD;</p>
        {/* <a>{element.link}</a> */}
        {/* <Image preview={false} width={200} height={200} src={element.url} /> */}
      </Card>
    </Col>
  )
}
