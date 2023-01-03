import React from 'react'
import ListItem from './ListItem'

const ShoppingList = ({ items, removeItem, toggleComplete, increment, decrement, changeProduct }) => {
  return (
    <div className='ShoppingList'>
      {
        items && items.map(item => (
          <ListItem 
          key={item.id} 
          item={item} 
          decrement={decrement} 
          increment={increment} 
          removeItem={removeItem} 
          toggleComplete={toggleComplete} 
          changeProduct={changeProduct}
          />
        ))
      }
    </div>
  )
}

export default ShoppingList