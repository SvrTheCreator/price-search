import { createAsyncThunk } from '@reduxjs/toolkit'

export const tvData = createAsyncThunk(
  'data/fetchData',
  async (_, thunkAPI) => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await fetch(
      'https://sales-pars.onrender.com/monitors/?skip=0&limit=100'
    )
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Failed to fetch data')
    }
    return response.json()
  }
)
