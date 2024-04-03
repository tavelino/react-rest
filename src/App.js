// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://spring-rest-simple-rest.apps.u0eqq9nm.eastus.aroapp.io')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching hello message:', error);
      });
  }, []);

  return (
    <div>
      <h1>Hello Message</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;