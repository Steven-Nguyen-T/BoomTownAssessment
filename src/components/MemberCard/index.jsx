import {Card, CardContent, Typography, CardActionArea, CardMedia} from '@mui/material/';
import './styles.scss'

const MemberCard = ({member}) => {
  return (
    <Card className='member-card'>
      <a href={member?.html_url}>
        <CardActionArea>
          <CardMedia 
            component='img'
            image={member?.avatar_url}
          />
        </CardActionArea>
      </a>
      <CardContent>
        <Typography className='text'>ID: {member?.id}</Typography>
        <Typography className='text'>Login: {member?.login}</Typography>
        <Typography className='text'>Type: {member?.type}</Typography>
        <Typography className='text'>Site Admin: {String(member?.site_admin)}</Typography>
      </CardContent>
    </Card>
  )
}

export default MemberCard;