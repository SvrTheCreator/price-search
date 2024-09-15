import { createSlice } from '@reduxjs/toolkit'
import { tvData } from './tvData' // импортируйте ваш thunk

const tvDataSlice = createSlice({
  name: 'tvData',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(tvData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(tvData.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(tvData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Something went wrong'
      })
  },
})

export default tvDataSlice.reducer
