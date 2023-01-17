import { useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import { useNavigate, Navigate } from 'react-router-dom'
import { useThemeContext } from '../hooks/useThemeContext'
import { useAuth } from '../hooks/useAuth'
import actiontypes from '../reducers/actiontypes'

const CreatePost = () => {

  const navigate = useNavigate()
  // const { addPost } = usePostsContext()
  const { dispatch } = usePostsContext()
  const { theme } = useThemeContext()
  const { isAuthenticated } = useAuth()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    // addPost(title, body)
    dispatch({
      type: actiontypes().posts.addPost,
      payload: {title, body}
    })
    navigate("/")
  }



  // return isAuthenticated ? (
  return (
    <form onSubmit={handleSubmit} className='create-post'>
      <div className="form-group">
        <label htmlFor="title" style={{color: theme.text}} className='form-label'>Title:</label>
        <input type="text" style={{color: theme.text}} value={title} onChange={e => setTitle(e.target.value)} className='form-control' id='title' />
      </div>
      <div className="form-group">
        <label htmlFor="body" style={{color: theme.text}} className="form-label">Body: </label>
        <textarea id="body"value={body} style={{backgroundColor: theme.ui, color: theme.text}} onChange={e => setBody(e.target.value)} className='form-control'></textarea>
      </div>
      <button className='btn btn-primary'>Create Post</button>
    </form>
  )
  // : <Navigate to="/login" />
}

export default CreatePost