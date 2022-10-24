import { useFetchedData } from '../../helper';
import { apiUrl } from '../../constants';
import ErrorPage from '../ErrorPage';
import Typography from '@mui/material/Typography';

const Hooks = () => {
	const [hooks, error, statusCode] = useFetchedData(`${apiUrl}/hooks`)
	if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>
	return (
		<div>
				{!error && <Typography variant='h3'>Hooks: {hooks} </Typography>}
		</div>
	)
}

export default Hooks;