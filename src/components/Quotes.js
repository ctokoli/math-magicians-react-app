/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import QUOTES_API from '../util/fetchAPI';

function DisplayQuotes() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(QUOTES_API, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'xPGkbZwR3P+7JQcvJeRqHA==SHtlGkR1v3cEpAw2',
        },
        contentType: 'application/json',
      });
      const quotes = await response.json();
      console.log(quotes);
      setData(quotes);
    } catch (error) {
      console.log(error);
      setError(error);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);
  return (
    <div>eee</div>
  );
}

export default DisplayQuotes;
