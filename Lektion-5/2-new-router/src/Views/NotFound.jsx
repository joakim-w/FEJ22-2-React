import { useEffect } from 'react'
import { useNavigate, Navigate, redirect } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()

  useEffect(() => {

    setTimeout(() => {
      navigate('/')
    }, 2000)

  }, [])

  return (
    <div>
      <h2>404, not found</h2>
    </div>
  )
}

export default NotFound