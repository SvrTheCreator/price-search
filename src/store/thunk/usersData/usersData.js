import { createAsyncThunk } from '@reduxjs/toolkit'

export const usersData = createAsyncThunk(
  'data/fetchData',
  async (_, thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Failed to fetch data')
    }
    return response.json()
  }
)
