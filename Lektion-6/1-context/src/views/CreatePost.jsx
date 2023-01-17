import { useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const navigate = useNavigate()
  const { addPost } = usePostsContext()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    addPost(title, body)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit} className='create-post'>
      <div className="form-group">
        <label htmlFor="title" className='form-label'>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='form-control' id='title' />
      </div>
      <div className="form-group">
        <label htmlFor="body" className="form-label">Body: </label>
        <textarea id="body"value={body} onChange={e => setBody(e.target.value)} className='form-control'></textarea>
      </div>
      <button className='btn btn-primary'>Create Post</button>
    </form>
  )
}

export default CreatePost