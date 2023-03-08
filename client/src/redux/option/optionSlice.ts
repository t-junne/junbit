import { createSlice } from '@reduxjs/toolkit'

export const optionSlice = createSlice({
  name: 'option',
  initialState: {
    value: 'VOLUME'
  },
  reducers: {
    setOption: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setOption } = optionSlice.actions
export const currentOption = (state: any) => state.option.value
export default optionSlice.reducer
