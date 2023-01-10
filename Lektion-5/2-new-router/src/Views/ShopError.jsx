import { useRouteError } from 'react-router-dom'

const ShopError = () => {

  const error = useRouteError()
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  )
}

export default ShopError