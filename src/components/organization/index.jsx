import { useState, useEffect } from "react";

const Organization = () => {
  const apiUrl = 'https://api.github.com/orgs/boomtownroi';

  const [data, setData] = useState({});

  const fetchData = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  };

  console.log('data', data)

  useEffect(() => {
    fetchData()
  }, []);

  const {id, name, html_url, is_verified, created_at, updated_at} = data;

  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{html_url}</p>
      <p>{String(is_verified)}</p>
      <p>{created_at}</p>
      <p>{updated_at}</p>
    </div>
  )
}

export { Organization };