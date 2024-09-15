import { createSlice } from '@reduxjs/toolkit'
import { tvData } from './tvData' // импортируйте ваш thunk

const tvDataSlice = createSlice({
  name: 'tvData',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    sortTv(state, action) {
      if (action.payload.key === 'sale_price-upper') {
        state.items.sort((a, b) => {
          // console.log(a.sale_price)

          if (a.sale_price < b.sale_price) {
            return -1
          }
          if (a.sale_price > b.sale_price) {
            return 1
          }
          return 0
        })
      }
      if (action.payload.key === 'sale_price-down') {
        state.items.sort((a, b) => {
          if (a.sale_price > b.sale_price) {
            return -1
          }
          if (a.sale_price < b.sale_price) {
            return 1
          }
          return 0
        })
      }
    },
  },
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

export const { sortTv } = tvDataSlice.actions

export default tvDataSlice.reducer
