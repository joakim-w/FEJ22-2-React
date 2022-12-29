import React from 'react'

const CustomerRow = ({ customer }) => {
  return (
    <tr>
      <td>{ customer.id }</td>
      <td>{ customer.name }</td>
      <td className='text-end'>
        <button className='btn btn-danger btn-sm'>Remove Customer</button>
      </td>
    </tr> 
  )
}

export default CustomerRow