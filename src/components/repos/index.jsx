import { useState, useEffect } from "react";
import { dateConverter } from "../helper";
import { Button } from "@mui/material";

const Repos = (props) => {
  const {repoUrl} = props;
  const [repoData, setRepoData] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchRepoData();
  }, []);

  async function fetchRepoData () {
    const res = await fetch(repoUrl, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      const err = `Status: ${res.status}, there is an error with the fetch request`;
      throw new Error(err);
    }

    const resRepoData = await res.json();
    setRepoData(resRepoData);
  }

  const formatRepoData = repoData.map(el => {
    return {
      id: el.id,
      name: el.name,
      html_url: el.html_url,
      description: el.description,
      language: el.language,
      created_at: el.created_at,
      updated_at: el.updated_at,
      pushed_at: el.pushed_at
    }
  });

  const repoArr = [];
  for (let i = 0; i < formatRepoData.length; i++) {
    const el = formatRepoData[i];
    repoArr.push(
      <ul key={i}>
        <li><strong>ID: </strong>{el.id}</li>
        <li><strong>Name: </strong>{el.name}</li>
        <li><strong>URL: </strong><a href={el.html_url}>{el.html_url}</a></li>
        <li><strong>Description: </strong>{el.description}</li>
        <li><strong>Language: </strong>{el.language}</li>
        <li><strong>Created At: </strong>{dateConverter(el.created_at)}</li>
        <li><strong>Updated At: </strong>{dateConverter(el.updated_at)}</li>
        <li><strong>Pushed At: </strong>{dateConverter(el.pushed_at)}</li>
      </ul>
    )
  }

  const renderRepos = () => {
    if (clicked) return <div>{repoArr}</div>
  }

  return (
    <div>
      <Button variant="contained" onClick={() => setClicked(!clicked)}>Repos</Button>
      {renderRepos()}
    </div>
  )
}

export { Repos }