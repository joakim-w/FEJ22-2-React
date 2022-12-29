
import CustomerRow from './CustomerRow'

const CustomerList = ({ customers, removeCustomer }) => {


  if(!customers.length) return (
    <div className='mt-5'>
      <h2>No customers to show</h2>
    </div>
  )

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          customers && customers.map(customer => <CustomerRow key={customer.id} customer={customer} removeCustomer={removeCustomer} />)
        }

        {/* {
          !customers.length && (
            <tr>
              <td>No customers to show</td>
              <td></td>
              <td></td>
            </tr>
          )
        } */}
      </tbody>
    </table>
  )
}

export default CustomerList