import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Spin } from 'antd'
// import { getTv } from '../../store/tvApiSlice'
import TvItem from './TvItem'
import { LoadingOutlined } from '@ant-design/icons'

import { tvData } from '../../store/thunk/tvData/tvData'

const row = {
  margin: '0% auto',
  padding: '20px',
  maxWidth: '70%',
  // minHeight: '100vh',
  width: '100vw',
  textAlign: 'start',
}
export default function Tv() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.tvData)

  useEffect(() => {
    dispatch(tvData())
  }, [dispatch])

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

  return (
    <div>
      {items.length > 0 ? (
        <div id='tv' style={row}>
          <Row gutter={[24, 24]} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {items &&
              items.map((element) => (
                <TvItem key={element.id} element={element} />
              ))}
          </Row>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  )
}

// export default function Tv() {
//   const dispatch = useDispatch()
//   const tvApi = useSelector((state) => state.tvApi.tvApi)
//   const [tv, setTv] = useState([])

//   useEffect(() => {
//     dispatch(getTv())
//     setTv(tvApi)
//   }, [tvApi])

//   return (
//     // <div id='tv'>
//     //   {/* <button onClick={() => dispatch(getTv())}>TV</button>
//     //   {tvApi?.map((element) => (
//     //     <TvItem key={element.id} element={element} />
//     //   ))} */}
//     //   {/* {console.log(tv)} */}
//     //   {tv && tv.map((element) => <TvItem key={element.id} element={element} />)}
//     // </div>

//     <div id='tv' style={row}>
//       <Row gutter={[24, 24]}>
//         {tv &&
//           tv.map((element) => <TvItem key={element.id} element={element} />)}
//       </Row>
//     </div>
//   )
// }
