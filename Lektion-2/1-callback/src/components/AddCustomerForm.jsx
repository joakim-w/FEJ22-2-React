import React from 'react'

const AddCustomerForm = () => {
  return (
    <form>
      <div className='text-center mb-4'>
        <h2>Add Customer</h2>
      </div>
      <div className='input-group'>
        <input type="text" className='form-control' />
        <button className='btn btn-dark'>Add Customer</button>
      </div>
    </form>
  )
}

export default AddCustomerForm