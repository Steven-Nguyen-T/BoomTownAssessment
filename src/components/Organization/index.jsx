import ErrorPage from '../ErrorPage';
import { useFetchedData } from '../../helper';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material/';
import { apiUrl } from '../../constants';
import './styles.scss';

const Organization = () => {
  const [data, error, statusCode] = useFetchedData(apiUrl);
  if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode} />

  return (
    <div className='organization-container'>
      {!error &&
        <div className='main-container'>
          <Card className='card-container'>
            <a href={data?.html_url}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={data?.avatar_url}
                />
              </CardActionArea>
            </a>
            <CardContent className='details'>
              <Typography gutterBottom variant="overline" component="div">{`ID: ${data?.id}`}</Typography>
              <Typography gutterBottom variant="overline" component="div">{`Name: ${data?.name}`}</Typography>
              <Typography gutterBottom variant="overline" component="div">{`Verification Status: ${data?.is_verified}`}</Typography>
              <Typography className={new Date(data?.created_at) > new Date(data?.updated_at) ? 'most-recent' : ''} gutterBottom variant="overline" component="div">{`Created On: ${new Date(data?.created_at)}`}</Typography>
              <Typography className={new Date(data?.created_at) < new Date(data?.updated_at) ? 'most-recent' : ''} gutterBottom variant="overline" component="div">{`Updated On: ${new Date(data?.updated_at)}`}</Typography>
            </CardContent>
          </Card>
        </div>
      }
    </div>
  )
}

export default Organization;