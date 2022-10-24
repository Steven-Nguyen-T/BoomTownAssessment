import { useState, useEffect } from 'react';

// Date String Editing Function
export const dateConverter = (date) => {
  const newDate = date.replace('T', ' ').replace('Z', '');
  return newDate;
}

// Removes unnecessary text from URL
export const urlTrim = (url) => {
  const newUrl = url.replace('{/member}', '');
  return newUrl;
}

// Data Fetch
export const useFetchedData = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [statusCode, setStatusCode] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        console.log(response, 'this is res')
        if (response.status === 200) {
          setData(await response.json());
        } else if (response.status === 404) {
          setStatusCode(response.status);
          setError('Page Not Found');
        } else {
          setStatusCode (response.status);
          setError(response.statusText);
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error(`${error}, there was a problem fetching the response.`)
      }
    }
    fetchData();
  }, [url])

  return ([data, error, statusCode])
}