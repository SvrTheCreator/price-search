import React from 'react'
import { Card, Col, Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import { StarFilled } from '@ant-design/icons'
import Monitors from './Monitors'

export default function MonitorsItem({ element }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/tv/${element.id}`) // Переход к деталям элемента
  }

  const star = +element.stars

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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              // justifyContent: 'center',
              gap: '3px',
            }}
          >
            <StarFilled style={{ color: 'red' }} />
            <span style={{ color: 'red' }}>{element.stars.slice(0, 3)}</span>
          </div>
          <span style={{ color: 'grey' }}>{element.count} отзывов</span>
        </div>
        <p style={{ width: '100%' }}>Модель: {element.name}</p>
        <p>
          Старая цена:{' '}
          <span style={{ textDecoration: 'line-through' }}>
            {element.base_price} &#x20BD;
          </span>
        </p>

        <p style={{ fontWeight: '700' }}>
          Новая цена: {element.sale_price} &#x20BD;
        </p>
        <Image preview={false} src={element.image} />
      </Card>
    </Col>
  )
}
