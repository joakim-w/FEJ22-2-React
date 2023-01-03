import { useState } from 'react'
const defaultState = {
  product: '',
  quantity: 1
}

const AddItemForm = ({ addItem }) => {

  const [error, setError] = useState(false)
  const [formData, setFormData] = useState(defaultState)

  const handleChange = (e) => {
    setFormData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(formData.product.trim() === '' || !formData.quantity) {
      setError(true)
      return
    }

    setError(false)
    addItem(formData)
    setFormData(defaultState)

  }

  return (
    <>
      { error && <p className='error'>You can't leave this empty</p>}
      <form className='AddItemForm' onSubmit={handleSubmit}>
        <input value={formData.product} name="product" onChange={handleChange} className='product-input' type="text" placeholder='Product name' />
        <input value={formData.quantity} name="quantity" onChange={handleChange} className='qty-input' type="number" min={1} />
        <button>Add</button>
      </form>  
    </>
  )
}

export default AddItemForm