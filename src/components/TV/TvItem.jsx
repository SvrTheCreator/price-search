import React from 'react'
import { Card, Col, Image } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function TvItem({ element }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/tv/${element.id}`) // Переход к деталям элемента
  }

  return (
    <Col span={12}>
      <Card
        onClick={handleClick}
        style={{
          maxWidth: 600,
          margin: '0 auto',
          cursor: 'pointer',
        }}
        title={element.name}
      >
        {/* <div>{element.brandName}</div> */}
        <p>Модель: {element.name}</p>
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
