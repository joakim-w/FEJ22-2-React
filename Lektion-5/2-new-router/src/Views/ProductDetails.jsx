
import { useLoaderData } from 'react-router-dom'

const ProductDetails = () => {

  const product = useLoaderData()

  return (
    <>
      <div className='product-details'>
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
      </div>
    </>
  )
}

export default ProductDetails