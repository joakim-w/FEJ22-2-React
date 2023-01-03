import { useState } from 'react'
import ChangeItem from './ChangeItem'

const ListItem = ({ item, removeItem, toggleComplete, increment, decrement, changeProduct }) => {

const [change, setChange] = useState(false)

const changeText = (text) => {
  changeProduct(item, text)
  setChange(false)
}

  return (
    <div className='ListItem'>
      { change
        ? <ChangeItem changeText={changeText} item={item} />
        : <p onClick={() => toggleComplete(item)} className={`product-title ${item.completed ? 'complete' : ''}`}>{ item.product }</p>
      }
      


      <div className='qty-buttons'>
        <button className='btn btn-minus' onClick={() => decrement(item)}><i className="fa-solid fa-minus"></i></button>
        <span className='quantity'>{item.quantity}</span>
        <button className='btn btn-plus' onClick={() => increment(item)}><i className="fa-solid fa-plus"></i></button>
      </div>
      <div className='buttons'>
        <button className="btn change-btn" onClick={() => setChange(change => !change)} ><i className="fa-solid fa-pen"></i></button>
        <button onClick={() => removeItem(item.id)} className='btn delete-btn'><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ListItem