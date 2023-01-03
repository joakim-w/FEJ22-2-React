import React from 'react'
import ListItem from './ListItem'

const ShoppingList = ({ items }) => {
  return (
    <div className='ShoppingList'>
      {
        items && items.map(item => (
          <ListItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default ShoppingList