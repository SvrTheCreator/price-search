import { configureStore } from '@reduxjs/toolkit'
import tvDataSlice from './thunk/tvData/tvDataSlice'
import usersDataSlice from './thunk/usersData/usersDataSlice'

export const store = configureStore({
  reducer: {
    tvData: tvDataSlice,
    usersData: usersDataSlice,
  },
})
