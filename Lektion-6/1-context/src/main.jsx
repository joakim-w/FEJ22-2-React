import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PostsContextProvider from './contexts/PostsContext'
import ThemeContextProvider from './contexts/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </PostsContextProvider>
  </React.StrictMode>,
)
