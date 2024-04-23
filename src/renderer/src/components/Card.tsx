import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'

export default function BottomActionsCard() {
  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ActionAreaCard
          title="Fundamentos de programacion"
          content="En una materia universitaria de Fundamentos de Programación, por lo general se cubren conceptos básicos relacionados con la programación y la lógica de la computación. Algunos temas comunes que se pueden ver en este tipo de curso incluyen:"
          image="https://i.pinimg.com/564x/91/5b/c8/915bc855b3b1dc43f7d1bcd784386863.jpg"
          link="/fundamentos"
        />
        <ActionAreaCard
          title="Custom Title"
          content="Custom Content"
          image="https://i.pinimg.com/564x/91/5b/c8/915bc855b3b1dc43f7d1bcd784386863.jpg"
          link="/poo"
        />
        <ActionAreaCard
          title="Custom Title"
          content="Custom Content"
          image="https://i.pinimg.com/564x/91/5b/c8/915bc855b3b1dc43f7d1bcd784386863.jpg"
        />
        <ActionAreaCard
          title="Custom Title"
          content="Custom Content"
          image="https://i.pinimg.com/564x/91/5b/c8/915bc855b3b1dc43f7d1bcd784386863.jpg"
        />
      </div>
    </div>
  )
}

function ActionAreaCard({ title, content, image, link }) {
  return (
    <Link to={link}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

ActionAreaCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
}
