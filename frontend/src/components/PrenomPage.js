// PrenomPage.js
import React, { useState, useEffect } from 'react';

function PrenomPage() {
  const [prenoms, setPrenoms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/prenom')
      .then(response => response.json())
      .then(data => setPrenoms(data))
      .catch(error => console.error("Il y a eu un problème avec l'opération fetch: ", error));
  }, []);

  return (
    <div>
      <h1>Prénoms</h1>
      <ul>
        {prenoms.map(prenom => (
          <li key={prenom}>{prenom}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrenomPage;
