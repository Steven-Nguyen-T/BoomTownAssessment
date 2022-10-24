import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { dateConverter } from '../../helper';
import './styles.scss';

const RepoCard = ({repo}) => {
  return (
   <Card className='repo-card'>
      <CardContent>
        <Typography className='text'>ID: {repo?.id}</Typography>
        <Typography className='text'>Repo: {repo?.name}</Typography>
        <Typography className='text'>HTML URL: <a href={repo?.html_url}>{repo?.html_url}</a></Typography>
        <Typography className='text'>Description: {repo?.description}</Typography>
        <Typography className='text'>Language: {repo?.language}</Typography>
        <Typography className='text'>Created At: {dateConverter(repo?.created_at)}</Typography>
        <Typography className='text'>Updated At: {dateConverter(repo?.updated_at)}</Typography>
        <Typography className='text'>Pushed At: {dateConverter(repo?.pushed_at)}</Typography>
      </CardContent>
   </Card>
  )
}

export default RepoCard;
