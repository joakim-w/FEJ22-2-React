import Post from '../components/Post'
import { usePostsContext } from '../hooks/usePostsContext'

// import { useContext } from 'react'
// import { PostsContext } from '../contexts/PostsContext'

const Posts = () => {

  // const { posts } = useContext(PostsContext)

  const { posts } = usePostsContext()

  return (
    <div className='Posts'>
      {
        posts.length ? posts.map(post => (
          <Post key={post.id} post={post} />
        ))
        : <h2>No posts to show</h2>
      }
    </div>
  )
}

export default Posts