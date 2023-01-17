import { createContext, useState, useReducer } from 'react'
import { postsReducer } from '../reducers/postsReducer';

export const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {

  const [posts, dispatch] = useReducer(postsReducer, [
    {
      id: '123refdscxjk',
      title: 'post 1',
      body: 'hjasd hjasd hjha sdjh asdjh asjdh ajshd jh asjdh ajhs djhas dsd'
    },
    {
      id: '123refdssdfg',
      title: 'post 2',
      body: 'hjasd hjasd hjha sdjhsdgfg sgdsr fgdfgsg sfd dsd'
    }
  ])

  // const [posts, setPosts] = useState([
  //   {
  //     id: '123refdscxjk',
  //     title: 'post 1',
  //     body: 'hjasd hjasd hjha sdjh asdjh asjdh ajshd jh asjdh ajhs djhas dsd'
  //   },
  //   {
  //     id: '123refdssdfg',
  //     title: 'post 2',
  //     body: 'hjasd hjasd hjha sdjhsdgfg sgdsr fgdfgsg sfd dsd'
  //   }
  // ])

  // const deletePost = (id) => {
  //   setPosts(state => {
  //     return state.filter(post => post.id !== id)
  //   })
  // }

  // const addPost = (title, body) => {
  //   const post = {
  //     id: crypto.randomUUID(),
  //     title,
  //     body
  //   }

  //   setPosts(state => {
  //     return [post, ...state]
  //   })
  // }


  const value = {
    posts,
    // deletePost,
    // addPost
    dispatch
  }

  return (
    <PostsContext.Provider value={value} >
      {children}
    </PostsContext.Provider>
  )
}


export default PostsContextProvider