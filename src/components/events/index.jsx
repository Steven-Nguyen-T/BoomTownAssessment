import { useFetchedData } from "../../helper";
import { apiUrl } from "../../constants";
import ErrorPage from "../ErrorPage";
import Typography from '@mui/material/Typography';
import EventCard from "../EventCard";
import Card from '@mui/material/Card';

const Events = () => {
  const [events, error, statusCode] = useFetchedData(`${apiUrl}/events`);
  if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>;
  console.log(events)

  return (
    <div>
      {!error &&
        <div>
          <Typography variant="h3">Events</Typography>
          <div className="event-list">
            <Card>
              {events.map((event, i) => {
                return (
                  <div key={i} className='items'>
                    <EventCard event={event} />
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

export default Events;