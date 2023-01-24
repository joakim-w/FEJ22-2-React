import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  error: null,
  loading: false
}

export const getAllPosts = createAsyncThunk('posts/getAll', async (_, thunkAPI) => {
  try {
    return await postsService.getAllPosts()
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const getPostById = createAsyncThunk('posts/getById', async (id, thunkAPI) => {
  try {
    return await postsService.getPostById(id)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.posts = []
        state.loading = true
        state.error = null
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false
        state.error = null
        state.posts = action.payload
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        console.log(action)
        state.loading = false
        state.error = action.payload
        state.posts = []
      })




      .addCase(getPostById.pending, state => {
        state.loading = true
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.posts = action.payload
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.posts = []
      })
  }
})



export default postsSlice.reducer