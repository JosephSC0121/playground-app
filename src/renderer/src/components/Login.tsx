import React, { useState } from 'react'
import { login } from '../api/api'
import { jwtDecode } from 'jwt-decode'

function Login(): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState<{ username: string; id: number } | null>(null)

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const userData = await login(username, password)
      const decodedToken: any = jwtDecode(userData.access_token)
      const sub: string = decodedToken.sub
      const id: number = decodedToken.id

      setUserInfo({ username: sub, id: id })
    } catch (error) {
      console.log('Error: No se pudo decodificar el token JWT.')
    }
  }

  if (userInfo) {
    return (
      <div>
        <h2>Bienvenido, {userInfo.username}</h2>
        <p>Tu ID es: {userInfo.id}</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  )
}

export default Login
