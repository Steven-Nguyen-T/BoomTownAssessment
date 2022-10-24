import { useFetchedData } from "../../helper";
import { apiUrl } from "../../constants";
import ErrorPage from "../ErrorPage";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import PublicMemberCard from "../PublicMemberCard";

const PublicMembers = () => {
    const [publicMembers, error, statusCode] = useFetchedData(`${apiUrl}/members`)
    if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>
    return (
      <div>
        {!error && 
            <div>
              <Typography variant='h3'>Public Members</Typography>
              <div className='public-members-list'>
                <Card>
                  {publicMembers.map((publicMember, i) => {
                    return (
                      <div key={i} className='items'>
                        <PublicMemberCard publicMember={publicMember} />
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

export default PublicMembers;