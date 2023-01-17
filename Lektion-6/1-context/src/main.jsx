import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthContextProvider from './contexts/AuthContext'
import PostsContextProvider from './contexts/PostsContext'
import ThemeContextProvider from './contexts/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostsContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </PostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
