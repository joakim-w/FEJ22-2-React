import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Root from './layouts/Root'
import ShopLayout from './layouts/ShopLayout'
import About from './Views/About'
import Home from './Views/Home'
import NotFound from './Views/NotFound'
import ProductDetails from './Views/ProductDetails'
import Shop from './Views/Shop'
import ShopError from './Views/ShopError'


const loadProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  if(!res.ok) {
    throw new Error('could not get the data')
  }
  const data = await res.json()
  return data
}

const loadDetails = async ({ params }) => {
  const { id } = params
  const res = await fetch('https://fakestoreapi.com/products/' + id)
  if(!res.ok) {
    throw new Error('could not get the data')
  }
  const data = await res.json()
  return data
}

    const router1 = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Root />}>

          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='shop' element={<ShopLayout />} errorElement={<ShopError />}>

            <Route index 
            element={<Shop />} 
            loader={loadProducts}
            // errorElement={<ShopError />}
            />

            <Route path=':id' 
            element={<ProductDetails />} 
            loader={loadDetails}
            // errorElement={<ShopError />}
            />

          </Route>

          <Route path="*" element={<NotFound />} />

        </Route>
      )

    )




    const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "shop",
            element: <ShopLayout />,
            errorElement: <ShopError />,
            children: [
              {
                path: "",
                element: <Shop />,
                loader: loadProducts
              },
              {
                path: ":id",
                element: <ProductDetails />,
                loader: loadDetails
              }
            ]
          }
        ]
      }
    ])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
