import { useState, useContext, createContext } from 'react'
// create context
const UserContext = createContext()
// create userprovider for context value
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const contextValue = { user, setUser }
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
// create custom hook
const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('has to be within a UserContext Provider')
  }
  return context
}

export { UserProvider, useUser }
