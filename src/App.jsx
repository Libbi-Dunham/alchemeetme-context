import './App.css'
import { UserProvider } from './context/UserContext'
import LikeList from './components/LikeList/LikeList'

function App() {
  // inital value should match the data type of end value

  return (
    <UserProvider>
      <LikeList />
    </UserProvider>
  )
}

export default App
