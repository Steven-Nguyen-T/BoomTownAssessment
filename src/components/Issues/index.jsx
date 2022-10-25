import { apiUrl } from '../../constants'
import { useFetchedData } from '../../helper'
import ErrorPage from '../ErrorPage'
import Typography from '@mui/material/Typography';

const Issues = () => {
	const [issues, error, statusCode] = useFetchedData(`${apiUrl}/issues`)
	if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>
	return (
		<div className='issues-container'>
				{!error && <Typography variant='h3'>Issues: {issues} </Typography>}
		</div>
	)
}

export default Issues;