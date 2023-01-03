import React from 'react'

const AddItemForm = () => {
  return (
    <>
      <p className='error'>You can't leave this empty</p>
      <form className='AddItemForm'>
        <input className='product-input' type="text" placeholder='Product name' />
        <input className='qty-input' type="number" min={1} />
        <button>Add</button>
      </form>
    </>
  )
}

export default AddItemForm