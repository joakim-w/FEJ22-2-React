import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const res = await fetch('https://fakestoreapi.com/products/' + id)
      const data = await res.json()
      setProduct(data)
      setLoading(false)
    }
    getProduct()
  }, [])

  return (
    <>
      {loading && <p>Loading...</p>}
      {product && <div className='product-details'>
        <h2 className='product-title'>{product.title}</h2>
        <div className='product-desc'>
          <div className='product-img'>
            <img src={product.image} alt="" />
          </div>
          <div className='product-info'>
            <p>{product.description}</p>
            <p className='product-price'>Price: ${product.price}</p>
          </div>
        </div>
      </div>}
    </>
  )
}

export default ProductDetails