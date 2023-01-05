import { useState, useEffect, useCallback } from 'react'

// const getTodos = async (url) => {
//   const res = await fetch(url)
//   const data = await res.json()
//   console.log(data)
//   return data
// }

const TodoList = () => {

  const [todos, setTodos] = useState([])

  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos?userId=1&_limit=10')

  const [test, setTest] = useState({name: 'joakim'})

  // const getTodos = async () => {
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   console.log(data)
  //   setTodos(data)
  // }

  // const test = {}

  // useEffect(() => {
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     setTodos(data)
    //   })

    // Vad ska ändras för att useEffect ska köras
  // }, [url])

  // useEffect(() => {
    // const getTodos = async () => {
    //   const res = await fetch(url)
    //   const data = await res.json()
    //   console.log(data)
    //   setTodos(data)
    // }

    // getTodos(url).then(setTodos)
  // }, [url])


  const getTodos = useCallback(async () => {

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setTodos(data)

  }, [url])


  useEffect(()=> {
    getTodos()
  }, [getTodos])


  return (
    <div>
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

export default TodoList