import { useState } from 'react'
import Post from '../components/Post'

const Posts = () => {

  const [posts, setPosts] = useState([
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