import { useState, useEffect } from "react";
import { dateConverter } from "../helper";

const Repos = (props) => {
  const {repoUrl} = props;
  const [repoData, setRepoData] = useState([]);

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

  console.log(formatRepoData, 'here')
  const repoArr = [];
  for (let i = 0; i < formatRepoData.length; i++) {
    const el = formatRepoData[i];
    repoArr.push(
      <ul>
        <li>ID: {el.id}</li>
        <li>Name: {el.name}</li>
        <li>Url: {el.html_url}</li>
        <li>Description: {el.description}</li>
        <li>Language: {el.language}</li>
        <li>Created At: {dateConverter(el.created_at)}</li>
        <li>Updated At: {dateConverter(el.updated_at)}</li>
        <li>Pushed At: {dateConverter(el.pushed_at)}</li>
      </ul>
    )
  }

  return (
    <div>
      {repoArr}
    </div>
  )
}

export { Repos }