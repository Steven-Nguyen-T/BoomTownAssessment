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

  console.log(formatEventsData, 'here 4 events')
  const eventsArr = [];
  for (let i = 0; i < formatEventsData.length; i++) {
    const el = formatEventsData[i];
    eventsArr.push(
      <ul>
        <li>ID: {el.id}</li>
        <li>Type: {el.type}</li>
        <li>Repo Name: {el.repo_name}</li>
        <li>Repo Url: {el.repo_url}</li>
        <li>Created At: {dateConverter(el.created_at)}</li>
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