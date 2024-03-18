import { UserContext } from '@renderer/context/UserContext'
import { useContext } from 'react'

function MainPage(): JSX.Element {
  const { userInfo } = useContext(UserContext)

  return (
    <div>
      {/* Aquí puedes usar la información del usuario */}
      {userInfo ? (
        <div>
          <p>Usuario: {userInfo.username}</p>
          <p>ID: {userInfo.id}</p>
          <p>Nivel: {userInfo.level}</p>
        </div>
      ) : (
        <p>No se ha iniciado sesión.</p>
      )}
    </div>
  )
}

export default MainPage
