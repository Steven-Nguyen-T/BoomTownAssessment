import { useState, useEffect } from "react";
import { dateConverter } from "../helper";
import { Button } from "@mui/material";

const Events = (props) => {
  const {eventsUrl} = props;
  const [eventsData, setEventsData] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchEventsData();
  }, []);

  async function fetchEventsData () {
    const res = await fetch(eventsUrl, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      const err = `Status: ${res.status}, there is an error with the fetch request`;
      throw new Error(err);
    }
    
    const resEventsData = await res.json();
    setEventsData(resEventsData);
  }

  const formatEventsData = eventsData.map(el => {
    return {
      id: el.id,
      type: el.type,
      repo_name: el.repo.name,
      repo_url: el.repo.url,
      created_at: el.created_at,
    }
  });

  const eventsArr = [];
  for (let i = 0; i < formatEventsData.length; i++) {
    const el = formatEventsData[i];
    eventsArr.push(
      <ul key={i}>
        <li><strong>ID: </strong>{el.id}</li>
        <li><strong>Type: </strong>{el.type}</li>
        <li><strong>Repo Name: </strong>{el.repo_name}</li>
        <li><strong>Repo URL: </strong><a href={el.repo_url}>{el.repo_url}</a></li>
        <li><strong>Created At: </strong>{dateConverter(el.created_at)}</li>
      </ul>
    )
  }

  const renderEvents = () => {
    if (clicked) return <div>{eventsArr}</div>
  }

  return (
    <div>
      <Button variant="contained" onClick={() => setClicked(!clicked)}>Events</Button>
      {renderEvents()}
    </div>
  )
}

export { Events }