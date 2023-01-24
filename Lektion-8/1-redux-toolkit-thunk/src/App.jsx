import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getPostById } from './features/posts/postsSlice'

const App = () => {

  const dispatch = useDispatch()
  const { posts, error, loading } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getAllPosts())
    // dispatch(getPostById(1))
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      { loading && <p>loading....</p> }
      { error && <p>{ error }</p> }
      { posts.map(post => (
        <div key={post.id}>
          <h3>{ post.title }</h3>
        </div>
      ))}
      {/* <h3>{posts.title}</h3> */}
    </div>
  )
}

export default App