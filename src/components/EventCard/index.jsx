import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { dateConverter } from '../../helper';
import './styles.scss';

const EventCard = ({event}) => {
  return (
    <Card className='event-card'>
      <CardContent>
        <Typography className='text'>ID: {event?.id}</Typography>
        <Typography className='text'>Type: {event?.type}</Typography>
        <Typography className='text'>Repo Name: {event?.repo.name}</Typography>
        <Typography className='text'>Repo URL: <a href={event?.repo.url}>{event?.repo.url}</a></Typography>
        <Typography className='text'>Created At: {dateConverter(event?.created_at)}</Typography>
      </CardContent>
  </Card>
  )
}

export default EventCard;