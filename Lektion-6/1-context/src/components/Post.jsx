import React from 'react'
import { usePostsContext } from '../hooks/usePostsContext'

const Post = ({post}) => {

  const { deletePost } = usePostsContext()

  const handleClick = () => {
    deletePost(post.id)
  }

  return (
    <div onClick={handleClick} className='post'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post