import { createContext, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    username: null,
    userId: 0,
    expiresAt: null,
    isLoggedIn: false
  })


  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ username: null,
      userId: 0,
      expiresAt: null,
      isLoggedIn: false })
  }

    return (
      <AuthContext.Provider value={{auth, setAuth, logout}}>
        {children}
      </AuthContext.Provider>
    )
    }
