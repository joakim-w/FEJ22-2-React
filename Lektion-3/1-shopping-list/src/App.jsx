import { useState } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'

const App = () => {

  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      product: 'Milk',
      quantity: 2,
      completed: false
    },
    {
      id: crypto.randomUUID(),
      product: 'Bread',
      quantity: 1,
      completed: false
    },
    {
      id: crypto.randomUUID(),
      product: 'Butter',
      quantity: 1,
      completed: false
    },
  ])

  return (
    <div className='App container'>
      <Header title="Shopping List" />
      <ShoppingList />
      <AddItemForm />
    </div>
  )
}

export default App