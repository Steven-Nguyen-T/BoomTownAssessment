import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { urlTrim } from "../helper";

const PublicMembers = (props) => {
  const {publicMembersUrl} = props;
  const [publicMembersData, setPublicMembersData] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchPublicMembersData();
  }, []);

  async function fetchPublicMembersData () {
    const res = await fetch(urlTrim(publicMembersUrl), {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      const err = `Status: ${res.status}, there is an error with the fetch request`;
      throw new Error(err);
    }
    
    const resPublicMembersData = await res.json();
    setPublicMembersData(resPublicMembersData);
  }

  const formatPublicMembersData = publicMembersData.map(el => {
    return {
      id: el.id,
      login: el.login,
      avatar_url: el.avatar_url,
      html_url: el.html_url,
      type: el.type,
      site_admin: el.site_admin
    }
  });

  const publicMembersArr = [];
  for (let i = 0; i < formatPublicMembersData.length; i++) {
    const el = formatPublicMembersData[i];
    publicMembersArr.push(
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

  const renderPublicMembers = () => {
    if (clicked) return <div>{publicMembersArr}</div>
  }

  return (
    <div>
      <Button variant="contained" onClick={() => setClicked(!clicked)}>PublicMembers</Button>
      {renderPublicMembers()}
    </div>
  )
}

export { PublicMembers }