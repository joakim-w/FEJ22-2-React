import { useState } from 'react'
import Post from './components/Post/Post'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore reiciendis dolorum velit architecto officia aliquid quisquam beatae provident in?'
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore reiciendis dolorum velit architecto officia aliquid quisquam beatae provident in?'
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore reiciendis dolorum velit architecto officia aliquid quisquam beatae provident in?'
    },
  ])
  return (
    <div className='container'>
      {/* <Post title={posts[0].title} body={posts[0].body} /> */}

      {/* {
        posts.map((post) => {
          // return <p>{post.title}</p>
          if(isLoggedIn) {
            return <Post title={post.title} body={post.body} />
          }
        })
      } */}

      {/* {
        posts.map((post, index) => (
          <div key={index}>
            <p>{index}</p>
            <p>{post.title}</p>
          </div>
        ))
      } */}

      {
        posts.length > 0 && posts.map((post) => (
          <Post title={post.title} body={post.body} key={post.id} />
        ))
      }

      <div className='card'>
        <h2>halloj</h2>
        <button>test</button>
      </div>

    </div>
  )
}


export default App