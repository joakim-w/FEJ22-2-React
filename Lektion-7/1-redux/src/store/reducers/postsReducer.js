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
        posts: [],
        loading: true,
        error: null
      }

    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: [],
        loading: false,
        error: 'could not fetch the posts'
      }

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload
      }

    default:
      return state
  }
}

export default postsReducer;