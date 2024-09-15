import { createSlice } from '@reduxjs/toolkit'
import { usersData } from './usersData' // импортируйте ваш thunk

const usersDataSlice = createSlice({
  name: 'usersData',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(usersData.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(usersData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Something went wrong'
      })
  },
})

export default usersDataSlice.reducer
