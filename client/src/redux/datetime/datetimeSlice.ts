import { createSlice } from '@reduxjs/toolkit'

const date = new Date()

export const datetimeSlice = createSlice({
  name: 'datetime',
  initialState: {
    value: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
    ).toISOString(),
  },
  reducers: {
    setDatetime: (state, action) => {
      state.value = action.payload
    },
    reset: (state) => {
      state.value = ''
    },
  },
})

export const { setDatetime, reset } = datetimeSlice.actions
export const currentDatetime = (state: any) => state.datetime.value
export default datetimeSlice.reducer
