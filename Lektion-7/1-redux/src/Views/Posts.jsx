import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/actions/postsActions'

const Posts = () => {

  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      { error && <p>{error}</p>}
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Posts