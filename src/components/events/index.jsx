import { useFetchedData } from "../../helper";
import { apiUrl } from "../../constants";
import ErrorPage from "../ErrorPage";
import {Typography, Card} from '@mui/material/';
import EventCard from "../EventCard";

const Events = () => {
  const [events, error, statusCode] = useFetchedData(`${apiUrl}/events`);
  if (statusCode === 404) return <ErrorPage error={error} statusCode={statusCode}/>;
  console.log(events)

  return (
    <div className='event-container'>
      {!error &&
        <div className='event-card-container'>
          <Typography variant="h3">Events</Typography>
          <div className="event-list">
            <Card>
              {events.map((event, i) => {
                return (
                  <div key={i} className='event'>
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