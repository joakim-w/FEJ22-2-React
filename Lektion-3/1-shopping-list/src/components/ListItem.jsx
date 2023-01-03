import React from 'react'

const ListItem = ({ item }) => {
  return (
    <div className='ListItem'>
      <p className={`product-title ${item.completed ? 'complete' : ''}`}>{ item.product }</p>
      <div className='qty-buttons'>
        <button className='btn btn-minus'><i className="fa-solid fa-minus"></i></button>
        <span className='quantity'>{item.quantity}</span>
        <button className='btn btn-plus'><i className="fa-solid fa-plus"></i></button>
      </div>
      <div className='buttons'>
        <button className="btn change-btn" ><i className="fa-solid fa-pen"></i></button>
        <button className='btn delete-btn'><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ListItem