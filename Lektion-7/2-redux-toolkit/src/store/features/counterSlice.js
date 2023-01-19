import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // här kan vi mutera vårat state direkt, Immer sköter det i bakgrunden år oss
      state.count += 1
    },
    decrement: (state, action) => {
      state.count -= action.payload
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer