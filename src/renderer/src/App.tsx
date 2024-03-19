import Login from './pages/Login'
import { UserProvider } from './context/UserContext'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'

function App(): JSX.Element {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
