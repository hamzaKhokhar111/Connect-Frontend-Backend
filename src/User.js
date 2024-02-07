import React, { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
  // State to store the data received from the API
  const [jokesData, setJokesData] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('http://localhost:5000/jokes')
      .then((response) => {
        // Update the state with the received data
        setJokesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div>
      <h1>HamZa</h1>
      {/* Render jokesData or an error message based on the API response */}
      {jokesData ? (
        <ul>
          {jokesData.map((joke) => (
            <li key={joke.id}>{joke.text}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default User;
