import { useFetchedData } from "../../helper";
import { apiUrl } from "../../constants";
import ErrorPage from "../ErrorPage";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MemberCard from "../MemberCard";

const Members = () => {
    const [members, error, statusCode] = useFetchedData(`${apiUrl}/members`)
    if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>
    return (
      <div>
        {!error && 
          <div>
            <Typography variant='h3'>Members</Typography>
            <div className='members-list'>
              <Card>
                {members.map((member, i) => {
                  return (
                    <div key={i} className='items'>
                      <MemberCard member={member} />
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

export default Members;