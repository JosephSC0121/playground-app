import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'
import Level from '@renderer/components/Level'
import Sidebar from '@renderer/components/Sidebar'

function Profile(): JSX.Element {
  const { userInfo } = useContext(UserContext)

  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <Sidebar />
      <div className="max-w-xl mx-auto mt-8 bg-white rounded-lg shadow-xl overflow-hidden">
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
          <h1 className="text-4xl font-semibold mt-4">{userInfo?.username}</h1>
          <div className="mt-6">
            <dl className="grid grid-cols-1 gap-y-4 text-lg">
              <div>
                <dt className="text-gray-500">Nombre:</dt>
                <dd className="text-gray-600 mt-1">Joseph Cristian Alberto Silva Casas</dd>
              </div>
              <div>
                <dt className="text-gray-500">Correo:</dt>
                <dd className="text-gray-600 mt-1">josephsilva0121@gmail.com</dd>
              </div>
              <div>
                <dt className="text-gray-500">Nivel:</dt>
                <dd className="mt-1">
                  <Level />
                </dd>
              </div>
            </dl>
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
