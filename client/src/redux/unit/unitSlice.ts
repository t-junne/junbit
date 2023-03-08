import { createSlice } from '@reduxjs/toolkit'

export const unitSlice = createSlice({
  name: 'unit',
  initialState: {
    value: 1
  },
  reducers: {
    setUnitData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setUnitData } = unitSlice.actions
export const currentUnit = (state: any) => state.unit.value
export default unitSlice.reducer
