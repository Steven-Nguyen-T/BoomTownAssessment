import { useState, useEffect } from 'react';
import { Events } from '../events';
import { Hooks } from '../hooks';
import { Repos } from '../repos'
import { Issues } from '../issues';
import { Members } from '../members';
import { PublicMembers } from '../publicMembers';

const Organization = () => {
  const apiUrl = 'https://api.github.com/orgs/boomtownroi';

  const [data, setData] = useState({});
  const [repoUrl, setRepoUrl] = useState('');
  const [eventsUrl, setEventsUrl] = useState('');
  const [hooksUrl, setHooksUrl] = useState('');
  const [issuesUrl, setIssuesUrl] = useState('');
  const [membersUrl, setMembersUrl] = useState('');
  const [publicMembersUrl, setPublicMembersUrl] = useState('');

  const [boomTownInfo, setBoomTownInfo] = useState(
    {
      avatar: '',
      blog: '',
      followers: '',
      following: '',
      public_repos: '',
    }
  );

  // Initial Data Fetch
  useEffect(() => {
    fetchData();
  }, []);

  //Async function to fetch data
  async function fetchData() {
    const res = await fetch(apiUrl, {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    //Error handling
    if (res.ok) {
      const newData = await res.json();
      console.log(newData, 'newdata')
      setData(newData);
      setBoomTownInfo({...boomTownInfo, 
        avatar: newData.avatar_url,
        blog: newData.blog,
        followers: newData.followers,
        following: newData.following,
        public_repos: newData.public_repos,
      })
      setRepoUrl(newData.repos_url);
      setEventsUrl(newData.events_url);
      setHooksUrl(newData.hooks_url);
      setIssuesUrl(newData.issues_url);
      setMembersUrl(newData.members_url);
      setPublicMembersUrl(newData.public_members_url);
    } else if (!res.ok) {
      const err = `Status: ${res.status}, there is an error with the fetch request`;
      throw new Error(err)
    }
  }

  return (
    <div>
      <ul>
        <img src={boomTownInfo.avatar} />
        <li>Website: <a href={boomTownInfo.blog}>{boomTownInfo.blog}</a></li>
        <li>Followers: {boomTownInfo.followers}</li>
        <li>Following: {boomTownInfo.following}</li>
        <li>{boomTownInfo.public_repos} repositories</li>
      </ul>
      <Repos repoUrl={repoUrl} />
      <Events eventsUrl={eventsUrl} />
      <Hooks hooksUrl={hooksUrl} />
      <Issues issuesUrl={issuesUrl} />
      <Members membersUrl={membersUrl} />
      <PublicMembers publicMembersUrl={publicMembersUrl} />
    </div>
  )
}

export { Organization };