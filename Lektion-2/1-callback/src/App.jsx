import { useState } from 'react'
import AddCustomerForm from './components/AddCustomerForm'
import CustomerList from './components/CustomerList'
import Header from './components/Header'

const App = () => {

  const [customers, setCustomers] = useState([
    { id: '12wefdssqe', name: 'Joakim' },
    { id: '12wefdsasds', name: 'Hans' },
  ])

  return (
    <div>
      <Header title="Customer List" />
      <div className='container mt-5'>
        <AddCustomerForm />
        <CustomerList customers={customers} />
      </div>
    </div>
  )
}

export default App