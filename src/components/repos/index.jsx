import { useFetchedData } from "../../helper";
import { apiUrl } from "../../constants";
import ErrorPage from "../ErrorPage";
import Typography from '@mui/material/Typography';
import RepoCard from "../RepoCard";
import Card from '@mui/material/Card';
import './styles.scss'

const Repos = () => {
  const [repos, error, statusCode]  = useFetchedData(`${apiUrl}/repos`);
  if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>

  return (
    <div>
      {!error && 
        <div>
          <Typography variant="h3">Repos</Typography>
          <div>
            <Card>
              {repos.map((repo, i) => {
                return (
                  <div key={i}>
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