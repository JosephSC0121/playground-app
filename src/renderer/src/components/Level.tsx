import * as React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useContext } from 'react'
import { UserContext } from '@renderer/context/UserContext'

interface LinearWithValueLabelProps {
  value: number
}

function LinearWithValueLabel(props: LinearWithValueLabelProps): JSX.Element {
  const { value } = props

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={value} />
    </Box>
  )
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }): JSX.Element {
  const { value, ...rest } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#474448' // Cambio de color de la parte azul
            },
            '& .MuiLinearProgress-buffer': {
              backgroundColor: '#474448' // Cambio de color del buffer (parte no llena de la barra)
            }
          }}
          {...rest}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default function LinearProgressFromUser(): JSX.Element {
  const { userInfo } = useContext(UserContext)
  const [progress, setProgress] = React.useState(userInfo?.level || 0)

  React.useEffect(() => {
    if (userInfo?.level !== undefined && userInfo?.level !== null) {
      setProgress(userInfo.level)
    }
  }, [userInfo?.level])

  return <LinearWithValueLabel value={progress} />
}
