import React from 'react'
import './App.css'
import TodoListTwo from './components/TodoListTwo'

const App = () => {
  
  const [showTodos, setShowTodos] = React.useState(true)

  return (
    <div>
      <button onClick={() => setShowTodos(state => !state)}>toggle todos</button>
      { showTodos && <TodoListTwo /> }
    </div>
  )
}

export default App