import { useState, UseContext, createContext } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const contextValue = { user, setUser }
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = UseContext(UserContext)
  if (context === undefined) {
    throw new Error('has to be within a UserContext Provider')
  }
  return context
}

export { UserProvider, useUser }
