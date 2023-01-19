import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../actiontypes";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(loading())
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if(!res.ok) {
        throw new Error(res.statusText)
      }

      const data = await res.json()
      dispatch(getPostsSuccess(data))

    }
    catch(err) {
      console.log(err.message)
      dispatch(getPostsError())
    }
  }
}



const loading = () => {
  return {
    type: GET_POSTS
  }
}

const getPostsError = () => {
  return {
    type: GET_POSTS_ERROR
  }
}

const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  }
}