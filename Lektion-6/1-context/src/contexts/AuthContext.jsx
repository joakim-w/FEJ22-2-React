import { createContext, useState } from "react";

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async () => {
    await wait(1000)
    setIsAuthenticated(true)
    await wait(1)
  }

  const logout = async () => {
    await wait(1000)
    setIsAuthenticated(false)
    await wait(1)
  }

  const value = {
    isAuthenticated,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider