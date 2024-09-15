import { configureStore } from '@reduxjs/toolkit'
import tvApiSlice from './tvApiSlice'
import usersSlice from './usersSlice'
import tvDataSlice from './thunk/tvData/tvDataSlice'
import usersDataSlice from './thunk/usersData/usersDataSlice'

export const store = configureStore({
  reducer: {
    tvApi: tvApiSlice,
    users: usersSlice,
    tvData: tvDataSlice,
    usersData: usersDataSlice,
  },
})
