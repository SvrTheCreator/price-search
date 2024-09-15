import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Spin } from 'antd'
import UserItem from './UserItem'
import { LoadingOutlined } from '@ant-design/icons'

import { usersData } from '../../store/thunk/usersData/usersData'

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
  const { items, loading, error } = useSelector((state) => state.usersData)

  useEffect(() => {
    dispatch(usersData())
  }, [dispatch])

  if (loading)
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
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {items.length > 0 ? (
        <div id='users' style={row}>
          <Row gutter={[24, 24]}>
            {items &&
              items.map((element) => (
                <UserItem key={element.id} element={element} />
              ))}
          </Row>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  )
}

// export default function Users() {
//   const dispatch = useDispatch()
//   const users = useSelector((state) => state.users.users)
//   const [testUsers, setTestUsers] = useState([])

//   useEffect(() => {
//     dispatch(getUsers())
//     setTestUsers(users)
//   }, [users])

//   return (
//     // <div id='tv'>
//     //   {/* <button onClick={() => dispatch(getTv())}>TV</button>
//     //   {tvApi?.map((element) => (
//     //     <TvItem key={element.id} element={element} />
//     //   ))} */}
//     //   {/* {console.log(tv)} */}
//     //   {tv && tv.map((element) => <TvItem key={element.id} element={element} />)}
//     // </div>

//     <div id='users' style={row}>
//       <Row gutter={[24, 24]}>
//         {testUsers &&
//           testUsers.map((element) => (
//             <UserItem key={element.id} element={element} />
//           ))}
//       </Row>
//     </div>
//   )
// }
