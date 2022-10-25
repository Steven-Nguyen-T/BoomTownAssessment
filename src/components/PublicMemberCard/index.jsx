import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './styles.scss'

const PublicMemberCard = ({publicMember}) => {
  return (
    <Card className='public-member-card'>
      <a href={publicMember?.html_url}>
        <CardActionArea>
          <CardMedia 
            component='img'
            image={publicMember?.avatar_url}
          />
        </CardActionArea>
      </a>
      <CardContent>
        <Typography className='text'>ID: {publicMember?.id}</Typography>
        <Typography className='text'>Login: {publicMember?.login}</Typography>
        <Typography className='text'>Type: {publicMember?.type}</Typography>
        <Typography className='text'>Site Admin: {String(publicMember?.site_admin)}</Typography>
      </CardContent>
    </Card>
  )
}

export default PublicMemberCard;