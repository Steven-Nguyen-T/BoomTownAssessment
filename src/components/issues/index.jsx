import { useState, useEffect } from "react";

const Issues = (props) => {
  const {issuesUrl} = props;
  const [issuesData, setIssuesData] = useState([]);

  useEffect(() => {
    fetchIssuesData();
  }, []);

  async function fetchIssuesData() {
    const res = await fetch(issuesUrl, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const err = `Status: ${res.status}, there is an error with the fetch request`;
      throw new Error(err);
    }

    const resIssuesData = await res.json();
    setIssuesData(resIssuesData);
    //Unsuccessful fetch, 404. No page found
  }
};

export { Issues };
