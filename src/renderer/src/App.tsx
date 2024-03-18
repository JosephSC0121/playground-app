import Login from './components/Login'
import { UserProvider } from './context/UserContext'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </UserProvider>
  </Router>
  )
}

export default App
