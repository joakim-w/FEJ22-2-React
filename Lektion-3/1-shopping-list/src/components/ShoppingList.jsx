import React from 'react'
import ListItem from './ListItem'

const ShoppingList = ({ items, removeItem, toggleComplete }) => {
  return (
    <div className='ShoppingList'>
      {
        items && items.map(item => (
          <ListItem key={item.id} item={item} removeItem={removeItem} toggleComplete={toggleComplete} />
        ))
      }
    </div>
  )
}

export default ShoppingList