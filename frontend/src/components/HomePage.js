// Dans le fichier src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => console.error("Il y a eu une erreur!", error));
  }, []);

  return (
    <div>
      <h1>Page d'accueil</h1>
      <p>{message}</p>
    </div>
  );
}

export default HomePage;
