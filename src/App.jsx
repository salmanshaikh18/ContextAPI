import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h1>Developer Salman</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App