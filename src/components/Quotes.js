import React, { useState, useEffect } from 'react';
import { QUOTES_API, API_KEYS } from '../util/fetchAPI';

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
          'X-Api-Key': API_KEYS,
        },
        contentType: 'application/json',
      });
      const quotes = await response.json();
      setData(quotes);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);
  if (loading) return <div className="loading quotes"><h2>Loading.....</h2></div>;
  if (error) return <div className="error quotes"><p>{error}</p></div>;
  if (data) {
    return (
      <div>
        {data.map((item) => (
          <div key={1} className="quotes">
            <h4>{item.quote}</h4>
            <p>{item.author}</p>
          </div>
        ))}
      </div>
    );
  }
  return (<div className="error quotes"><p>Error....</p></div>);
}

export default DisplayQuotes;
