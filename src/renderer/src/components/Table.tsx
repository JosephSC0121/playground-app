import { useState, useEffect, useContext } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import { TokenContext } from '@renderer/context/TokenContext'
import { getExercises } from '@renderer/services/ExercisesService'
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
  }, [])

  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Titulo</TableColumn>
          <TableColumn>Dificultad</TableColumn>
          <TableColumn>Lenguaje</TableColumn>
        </TableHeader>
        <TableBody>
          {exercisesData.map((exercise, index) => (
            <TableRow key={index}>
              <TableCell>{exercise.title}</TableCell>
              <TableCell>{exercise.dificulty}</TableCell>
              <TableCell>{exercise.languaje}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
