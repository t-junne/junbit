import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  value: RadioOptionType
}

export const radioOptionSlice = createSlice({
  name: 'radioOption',
  initialState: {
    value: 'VOLUME',
  } as InitialState,
  reducers: {
    setRadioOption: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setRadioOption } = radioOptionSlice.actions
export const currentRadioOption = (state: any) => state.radioOption.value
export default radioOptionSlice.reducer
