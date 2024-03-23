import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'
import { getUserData } from '@renderer/api/api'
import { TokenContext } from '@renderer/context/TokenContext'

import Sidebar from '@renderer/components/Sidebar'
import Level from '@renderer/components/Level'

const handleData = async () => {
  const { setUser } = useContext(UserContext)
  const { tokenInfo } = useContext(TokenContext)

  const token = tokenInfo?.access_token

  const userData = await getUserData(token!)
  setUser({
    id: userData.id,
    nombres: userData.nombres,
    apellidos: userData.apellidos,
    aboutme: userData.aboutme,
    email: userData.email,
    username: userData.username,
    level: userData.level
  })
}

function Profile(): JSX.Element {
  const { user } = useContext(UserContext)
  handleData()
  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <Sidebar />
      <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          src="https://science.nasa.gov/wp-content/uploads/2023/07/webb-flickr-52660766241-63ab077ba6-4k-slice.jpg?w=768&format=webp"
          alt="Cover"
          className="w-full"
        />
        <div className="bg-secondary text-center p-8">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeng0ZWcxcTFxMmV0eGg0NGpjMGt2ZnNydjh4bjlsN3U3dmx2eGRyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l5ChODefIMIa0psg6K/giphy.gif"
            alt="Profile"
            className="h-40 w-40 rounded-full ring-4 ring-white mx-auto -mt-20"
          />
          <h1 className="text-4xl font-semibold mt-4">{user?.username}</h1>
          <div className="mt-6">
            <dl className="grid grid-cols-2 gap-y-4 text-lg">
              <div>
                <dt className="text-gray-500">Nombre:</dt>
                <dd className="text-gray-600 mt-1">{user?.nombres}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Apellidos:</dt>
                <dd className="text-gray-600 mt-1">{user?.apellidos}</dd>
              </div>
            </dl>
            <div>
              <dt className="text-gray-500 mt-8">Sobre mi:</dt>
              <dd className="text-gray-600 mt-1">{user?.aboutme}</dd>
            </div>
            <div>
              <dt className="text-gray-500 mt-8">Nivel:</dt>
              <Level />
            </div>
          </div>
          <div className="mt-8">
            <div className="mt-4 text-gray-600 italic">
              <p>El éxito es la suma de pequeños esfuerzos repetidos día tras día.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
