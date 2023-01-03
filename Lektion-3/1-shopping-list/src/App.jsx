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
      completed: true
    },
    {
      id: crypto.randomUUID(),
      product: 'Butter',
      quantity: 1,
      completed: false
    },
  ])

  const clearList = () => {
    setItems([])
  }

  const addItem = (formData) => {
    setItems(prevState => {
      return [...prevState, { id: crypto.randomUUID(), completed: false, ...formData }]
    })
  }

  const removeItem = id => {
    setItems(prevState => {
      return prevState.filter(item => item.id !== id)
    })
  }

  const toggleComplete = (item) => {
    

    // Den här funktionen var bara föär att visa begränsningarna med att göra en loop i en set-funktion
    // const newItems = items.map(_item => {

    //   if(_item.id === item.id) {
    //     _item.completed = !_item.completed
    //     return _item
    //   }

    //   return _item
    // })
    // setItems(newItems)


    // objekt = referens värde
    // Uppdaterar bara objektet inne i vårat state - då kommer inte React att se dom ändringarna
    item.completed = !item.completed

    // Här måste vi byta ut hela vårat state för att rect ska se ändringarna och uppdatera DOM
    setItems(prevState => [...prevState])

  }

  return (
    <div className='App container'>
      <Header title="Shopping List" />
      <ShoppingList items={items} removeItem={removeItem} toggleComplete={toggleComplete} />
      <AddItemForm addItem={addItem} />
    </div>
  )
}

export default App