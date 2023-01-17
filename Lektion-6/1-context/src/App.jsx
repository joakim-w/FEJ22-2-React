import React from 'react'
import './App.css'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Root from './layouts/Root'
import Posts from './views/Posts'
import CreatePost from './views/CreatePost'
import Login from './views/Login'
import { ProtectedRoute } from './routes/ProtectedRoute'
import { useAuth } from './hooks/useAuth'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Posts />
      },
      {
        path: "create",
        // element: <CreatePost />,
        element: <ProtectedRoute><CreatePost /></ProtectedRoute>
        // loader: () => {
        //   const isAuthenticated = false
        //   if(!isAuthenticated) {
        //     return redirect("/login")
        //   }
        // }
      },
      {
        path: "login",
        element: <Login />
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App