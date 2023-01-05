import { useFetch } from "../hooks/useFetch"
import { useState } from 'react'

const TodoListTwo = () => {


  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos?userId=1&_limit=10')

  const config = {
    method: 'GET'
  }

  const { data: todos, loading, error } = useFetch(url, config)

  return (
    <div>

      { loading && <p>Loading...</p> }
      { error && <p>{error}</p> }

      {
        todos.map(todo => (
          <div key={todo.id}>
            <h3>userId: {todo.userId}</h3>
            <p>{todo.title}</p>
          </div>
        ))
      }


      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=1&_limit=10')}>user1</button>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?userId=2&_limit=10')}>user2</button>

    </div>
  )
}

export default TodoListTwo