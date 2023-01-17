import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

  const { login } = useAuth()
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleLogin = async () => {
    await login()
    // if(state) {
    //   navigate(state.from)
    // } else {
    //   navigate("/")
    // }
    navigate(state?.from || "/")
  }


  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin} className='btn btn-primary'>do it</button>
    </div>
  )
}

export default Login