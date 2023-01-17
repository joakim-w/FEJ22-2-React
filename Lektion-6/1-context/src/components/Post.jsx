import React from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import { useThemeContext } from '../hooks/useThemeContext'

const Post = ({post}) => {

  const { deletePost } = usePostsContext()
  const { isDarkTheme, theme } = useThemeContext()

  const handleClick = () => {
    deletePost(post.id)
  }

  return (
    <div onClick={handleClick} className='post' style={{backgroundColor: theme.ui, color: theme.text}}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post