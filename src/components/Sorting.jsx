import React from 'react'
import {
  DownOutlined,
  SortDescendingOutlined,
  SortAscendingOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { ConfigProvider, Dropdown, Space } from 'antd'
import { useDispatch } from 'react-redux'
import { sortTv } from '../store/thunk/tvData/tvDataSlice'

const styleForSort = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
}

export default function Sorting() {
  const dispatch = useDispatch()

  const onClick = ({ key }) => {
    dispatch(sortTv({ key }))
  }
  const items = [
    {
      label: (
        <div style={styleForSort}>
          Текущая цена
          <DownOutlined />
          {/* <UpOutlined /> */}
        </div>
      ),
      key: 'sale_price-upper',
    },
    {
      label: (
        <div style={styleForSort}>
          Текущая цена
          <UpOutlined />
          {/* <DownOutlined /> */}
        </div>
      ),
      key: 'sale_price-down',
    },
  ]

  return (
    <ConfigProvider theme={{ token: { colorTextBase: 'black' } }}>
      <div style={{ marginBottom: '50px' }}>
        <Dropdown
          menu={{
            items,
            onClick,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Сортировка
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </ConfigProvider>
  )
}
