import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { urlTrim } from "../helper";

const Members = (props) => {
  const {membersUrl} = props;
  const [membersData, setMembersData] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchMembersData();
  }, []);

  async function fetchMembersData () {
    const res = await fetch(urlTrim(membersUrl), {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      const err = `Status: ${res.status}, there is an error with the fetch request`;
      throw new Error(err);
    }
    
    const resMembersData = await res.json();
    setMembersData(resMembersData);
  }

  const formatMembersData = membersData.map(el => {
    return {
      id: el.id,
      login: el.login,
      avatar_url: el.avatar_url,
      html_url: el.html_url,
      type: el.type,
      site_admin: el.site_admin
    }
  });

  const membersArr = [];
  for (let i = 0; i < formatMembersData.length; i++) {
    const el = formatMembersData[i];
    membersArr.push(
      <ul key={i}>
        <img src={el.avatar_url}/>
        <li><strong>ID: </strong>{el.id}</li>
        <li><strong>Login: </strong>{el.login}</li>
        <li><strong>HTML URL: </strong><a href={el.html_url}>{el.html_url}</a></li>
        <li><strong>Type: </strong>{el.type}</li>
        <li><strong>Site Admin: </strong>{String(el.site_admin)}</li>
      </ul>
    )
  }

  const renderMembers = () => {
    if (clicked) return <div>{membersArr}</div>
  }

  return (
    <div>
      <Button variant="contained" onClick={() => setClicked(!clicked)}>Members</Button>
      {renderMembers()}
    </div>
  )
}

export { Members }