import { usePage } from '@renderer/hooks/usePage'
import { Link, useParams } from 'react-router-dom'
import SideBar from '@renderer/components/Sidebar'

export default function BasicTable() {
  const { theme } = useParams()
  const themeToUse = theme ?? '404'
  const { exercisesData } = usePage(themeToUse)

  return (
    <div className="bg-primary max-w-4xl mx-auto">
      <SideBar />
      <table className=" bg-primary min-w-full">
        <thead>
          <tr>
            <th className="px-8 py-4 bg-gray-50 text-left text-xl leading-5 font-medium text-gray-500 uppercase tracking-wider">
              Titulo
            </th>
            <th className="px-8 py-4 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Dificultad
            </th>
            <th className="px-8 py-4 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Lenguaje
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {exercisesData.map((exercise, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap">
                <Link to={`/exercise/${exercise.title}`} className="block hover:bg-gray-100">
                  {exercise.title}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right">{exercise.dificulty}</td>
              <td className="px-6 py-4 whitespace-no-wrap text-right">{exercise.languaje}</td>{' '}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
