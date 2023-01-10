import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()

      setProducts(data)
    }

    getProducts()
  }, [])

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