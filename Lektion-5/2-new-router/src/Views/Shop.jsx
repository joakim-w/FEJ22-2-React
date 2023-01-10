import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Shop = () => {

  const products = useLoaderData()

  return (
    <div className='shop'>
      {
        products.map(product => (
          <Link to={'/shop/'+ product.id} className="product-item" key={product.id}>
            <div className="image-container">
              <img src={product.image} alt="product image" />
            </div>
            <h3>{product.title}</h3>
          </Link>
        ))
      }
    </div>
  )
}

export default Shop