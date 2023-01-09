import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  init
}

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    reducer: (state) => {
      state.init = 1
    }
  }
})

export const { reducer } = templateSlice.actions
