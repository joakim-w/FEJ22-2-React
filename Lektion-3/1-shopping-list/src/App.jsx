import { useState, useEffect } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'

const App = () => {

  const [items, setItems] = useState([])

  const clearList = () => {
    setItems([])
  }

  const addItem = (formData) => {
    setItems(prevState => {
      return [...prevState, { id: crypto.randomUUID(), completed: false, ...formData }]
    })
    // localStorage.setItem('itemList', JSON.stringify(items))
  }

  const removeItem = id => {
    setItems(prevState => {
      return prevState.filter(item => item.id !== id)
    })
    // localStorage.setItem('itemList', JSON.stringify(items))
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
    // localStorage.setItem('itemList', JSON.stringify(items))
  }

  const changeProduct = (item, newTitle) => {
    item.product = newTitle
    setItems(state => [...state])
    // localStorage.setItem('itemList', JSON.stringify(items))
  }

  const increment = (item) => {
    item.quantity ++
    setItems(state => [...state])
    // localStorage.setItem('itemList', JSON.stringify(items))
  }
  const decrement = (item) => {
    if(item.quantity <= 1) {
      removeItem(item.id)
      return
    }

    item.quantity --
    setItems(state => [...state])
    // localStorage.setItem('itemList', JSON.stringify(items))
  }

  
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('itemList'))
    if(storedItems) {
      setItems(storedItems)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(items))
  }, [items])

  return (
    <div className='App container'>
      <Header title="Shopping List" />
      <ShoppingList items={items} changeProduct={changeProduct} decrement={decrement} increment={increment} removeItem={removeItem} toggleComplete={toggleComplete} />
      <AddItemForm addItem={addItem} />
    </div>
  )
}

export default App