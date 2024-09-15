import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  tvApi: [],
}

export const getTv = createAsyncThunk(
  'tvApi/getTv',
  async (_, { rejectWithValue, dispatch }) => {
    // const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch(setTvApi(res.data))
  }
)

export const tvApiSlice = createSlice({
  name: 'tvApi',
  initialState,
  reducers: {
    setTvApi: (state, action) => {
      state.tvApi = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTv.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(getTv.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getTv.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setTvApi } = tvApiSlice.actions

export default tvApiSlice.reducer
