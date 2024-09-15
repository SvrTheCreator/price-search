import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  users: [],
}

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue, dispatch }) => {
    // const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(setUsers(res.data))
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
