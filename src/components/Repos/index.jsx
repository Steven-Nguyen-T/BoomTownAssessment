import { useFetchedData } from "../../helper";
import { apiUrl } from "../../constants";
import ErrorPage from "../ErrorPage";
import {Typography, Card} from '@mui/material/';
import RepoCard from "../RepoCard";
import './styles.scss'

const Repos = () => {
  const [repos, error, statusCode]  = useFetchedData(`${apiUrl}/repos`);
  if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>

  return (
    <div className='repo-container'>
      {!error &&
        <div className='repo-card-container'>
          <Typography variant="h3">Repos</Typography>
          <div className='repo-list'>
            <Card>
              {repos.map((repo, i) => {
                return (
                  <div className='repo' key={i}>
                    <RepoCard repo={repo}/>
                  </div>
                )
              })}
            </Card>
          </div>
        </div>
      } 
    </div>
  )
}

export default Repos;