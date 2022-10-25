import { useFetchedData } from "../../helper";
import { apiUrl } from "../../constants";
import ErrorPage from "../ErrorPage";
import {Card, Typography} from '@mui/material/';
import PublicMemberCard from "../PublicMemberCard";

const PublicMembers = () => {
    const [publicMembers, error, statusCode] = useFetchedData(`${apiUrl}/members`)
    if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>
    return (
      <div className='public-member-container'>
        {!error && 
            <div className='public-member-car'>
              <Typography variant='h3'>Public Members</Typography>
              <div className='public-members-list'>
                <Card>
                  {publicMembers.map((publicMember, i) => {
                    return (
                      <div key={i} className='public-member'>
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