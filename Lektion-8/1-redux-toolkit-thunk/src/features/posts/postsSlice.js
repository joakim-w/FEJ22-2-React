import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  error: null,
  loading: false
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})



export default postsSlice.reducer