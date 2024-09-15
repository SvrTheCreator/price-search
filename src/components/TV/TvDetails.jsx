import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tvData } from '../../store/thunk/tvData/tvData'
import { Card, Col, Image, Spin } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { LoadingOutlined, StarFilled } from '@ant-design/icons'

// const styleCol = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }

// const styleCard = {
//   minWidth: '600px',
//   minHeight: '500px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }

function TvDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.tvData)

  useEffect(() => {
    // Возможно, вам нужно загрузить детализированную информацию о элементе
    dispatch(tvData()) // Или используйте другой экшен для получения деталей
  }, [dispatch, id])

  const element = items.find((item) => item.id === parseInt(id))

  if (loading) {
    return (
      <Spin
        fullscreen
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 300,
            }}
            spin
          />
        }
      />
    )
  }
  if (error) return <div>Error: {error}</div>
  if (!element) return <div>Item not found</div>

  return (
    <Card
      style={{
        margin: '0 auto',
        width: '50%',
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
      <p>Новая цена: {element.sale_price} &#x20BD;</p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image preview={false} src={element.image} />
      </div>
      <p>
        Сайт:{' '}
        <a
          style={{ wordBreak: 'break-word' }}
          href={element.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {element.link}
        </a>
      </p>
    </Card>

    // <div
    //   style={{
    //     padding: 24,
    //     // minHeight: '100vh',
    //     background: '#f0f2f5',
    //   }}
    // >
    //   <Card
    //     style={{
    //       maxWidth: 600,
    //       margin: '0 auto',
    //     }}
    //     title={element.name}
    //   >
    //     <div
    //       style={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         flexDirection: 'column',
    //         justifyContent: 'center',
    //         gap: '10px',
    //       }}
    //     >
    //       {/* <p>ID: {element.id}</p> */}
    //       <p>Модель: {element.name}</p>
    //       <p>
    //         Старая цена:{' '}
    //         <span style={{ textDecoration: 'line-through' }}>
    //           {element.base_price} &#x20BD;
    //         </span>
    //       </p>
    //       <p>Новая цена: {element.sale_price} &#x20BD;</p>
    //       <p>Бонус на карту Мвидео: {element.bonus} бонусов</p>
    //       <p>
    //         Сайт:{' '}
    //         <a
    //           style={{ wordBreak: 'break-word' }}
    //           href={element.link}
    //           target='_blank'
    //           rel='noopener noreferrer'
    //         >
    //           {element.link}
    //         </a>
    //       </p>
    //       <Image
    //         style={{
    //           display: 'flex',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //         }}
    //         preview={false}
    //         src={element.image}
    //       />
    //     </div>
    //   </Card>
    // </div>
  )
}

export default TvDetails
