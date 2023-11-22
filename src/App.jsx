import './App.css'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h1>Developer Salman</h1>
    </UserContextProvider>
  )
}

export default App