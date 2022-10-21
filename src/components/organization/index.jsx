import { useState, useEffect } from 'react';
import { Events } from '../events';
import { Repos } from '../repos'

const Organization = () => {
  const apiEndpoint = 'https://api.github.com/orgs/boomtownroi';

  const [data, setData] = useState({});
  const [repoUrl, setRepoUrl] = useState('');
  const [eventsUrl, setEventsUrl] = useState('');

  // Initial Data Fetch
  useEffect(() => {
    fetchData();
  }, []);

  //Async function to fetch data
  async function fetchData() {
    const res = await fetch(apiEndpoint, {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });

    //Error handling
    if (res.ok) {
      const newData = await res.json();
      setData(newData);
      setRepoUrl(newData.repos_url);
      setEventsUrl(newData.events_url)
    } else {
      const err = `Status: ${res.status}, there is an error with the fetch request`;
      throw new Error(err)
    }
  }

  return (
    <div className='main-container'>
      <Repos repoUrl={repoUrl} />
      <Events eventsUrl={eventsUrl} />
    </div>
  )
}

export { Organization };