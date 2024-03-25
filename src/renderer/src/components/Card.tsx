import PropTypes from 'prop-types' // Importa PropTypes
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardActions from '@mui/joy/CardActions'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

export default function BottomActionsCard() {
  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CustomCard />
        <CustomCard />
        <CustomCard title="Custom Title" content="Custom Content" buttonText="Custom Button Text" />
        <CustomCard />
      </div>
    </div>
  )
}

function CustomCard({ title, content, buttonText }) {
  return (
    <Card variant="outlined" className="w-full sm:w-80 overflow-auto resize-x">
      <Box className="flex justify-between items-center"></Box>
      <CardContent>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">{content}</Typography>
      </CardContent>
      <CardActions className="flex justify-between items-center">
        <IconButton variant="outlined" color="neutral" className="mr-auto">
          <FavoriteBorder />
        </IconButton>
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" color="primary">
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}
CustomCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string
}
