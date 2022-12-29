import { useState, useRef } from 'react'

const AddCustomerForm = ({ addCustomerCallback }) => {


  const customerNameInput = useRef()

  const [customerName, setCustomerName] = useState('')

  console.log('updated')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // addCustomerCallback(customerName)
    // setCustomerName('')

    console.log(customerNameInput.current)

    addCustomerCallback(customerNameInput.current.value)

    customerNameInput.current.value = ''
    customerNameInput.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='text-center mb-4'>
        <h2>Add Customer</h2>
      </div>
      <div className='input-group'>

        {/* <input 
        type="text" 
        className='form-control' 
        placeholder='Enter customer name'
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
        /> */}

        <input 
        type="text" 
        className='form-control' 
        placeholder='Enter customer name'
        ref={customerNameInput}
        />

        <button className='btn btn-dark'>Add Customer</button>
      </div>
    </form>
  )
}

export default AddCustomerForm