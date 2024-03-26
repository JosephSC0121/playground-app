import Login from './pages/Login'
import { TokenProvider } from './context/TokenContext'
import { UserProvider } from './context/UserContext'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Fundaments from './pages/Fundaments'

function App(): JSX.Element {
  return (
    <Router>
      <UserProvider>
        <TokenProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/fundamentos" element={<Fundaments />} />
          </Routes>
        </TokenProvider>
      </UserProvider>
    </Router>
  )
}

export default App
