import { useState } from 'react'
import AddCustomerForm from './components/AddCustomerForm'
import CustomerList from './components/CustomerList'
import Header from './components/Header'

const App = () => {

  const [customers, setCustomers] = useState([
    { id: '12wefdssqe', name: 'Joakim' },
    { id: '12wefdsasds', name: 'Hans' },
  ])

  const addCustomer = (customerName) => {
    setCustomers(prevCustomers => {
      return [...prevCustomers, { id: crypto.randomUUID(), name: customerName }]
    })
  }

  const removeCustomer = (id) => {
    setCustomers(prevCustomers => {
      return prevCustomers.filter(customer => customer.id !== id)
    })
  }
  
  

  return (
    <div>
      <Header title="Customer List" />
      <div className='container mt-5'>
        <AddCustomerForm addCustomerCallback={addCustomer} />
        <CustomerList customers={customers} removeCustomer={removeCustomer} />
      </div>
    </div>
  )
}

export default App