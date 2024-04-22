import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { TokenContext } from '../context/TokenContext' // Reemplaza con la ubicación correcta de tu TokenContext
import { getExercises } from '../services/ExercisesService' // Reemplaza con la ubicación correcta de tu ExercisesService
import { Exercises } from '@renderer/interfaces/ExerciseInterface'

export default function App() {
  const { tokenInfo } = useContext(TokenContext)
  const [exercisesData, setExercisesData] = useState<Exercises[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const token = tokenInfo?.access_token
      if (token) {
        try {
          const data = await getExercises(token, 'fundamentos')
          setExercisesData(data)
        } catch (error) {
          console.error('Error fetching exercises:', error)
        }
      }
    }

    fetchData()
  }, [tokenInfo]) // Agrega tokenInfo como dependencia para que useEffect se ejecute cuando cambie

  return (
    <div className="bg-primary max-w-4xl mx-auto">
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
