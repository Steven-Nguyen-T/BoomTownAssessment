import { useState, useEffect } from "react";

const Hooks = (props) => {
  const { hooksUrl } = props;
  const [hooksData, setHooksData] = useState([]);

  useEffect(() => {
    fetchHooksData();
  }, []);

  async function fetchHooksData() {
    const res = await fetch(hooksUrl, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const err = `Status: ${res.status}, there is an error with the fetch request`;
      throw new Error(err);
    }

    const resHooksData = await res.json();
    setHooksData(resHooksData);
    //No Data Found
  }
};

export { Hooks };
