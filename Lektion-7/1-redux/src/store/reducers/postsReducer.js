import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "../actiontypes";

const initState = {
  posts: [],
  loading: false,
  error: null
}

const postsReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true
      }

    case GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'could not fetch the posts'
      }


    default:
      return state
  }
}

export default postsReducer;