import React, { useState, useEffect } from 'react';

function CitationPage() {
  const [citation, setCitation] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/citation')
      .then(response => response.json())
      .then(data => {setCitation(data.citation); 
        console.log("Contenue de data récupérer dans la réponse : ", data);
        console.log("Log de data.citation : ", data.citation);})
      .catch(error => console.error("Il y a eu un problème avec l'opération fetch:", error));
  }, []);

  // console.log("test", citation);

  return (
    <div>
      <h1>Citation Kaamelott</h1>
      {citation ? ( // Vérification si l'objet citation contient des données
        <div>
          <p>"{citation.citation}"</p>
          <p>- {citation.infos?.personnage} ({citation.infos?.acteur}), {citation.infos?.saison} - {citation.infos?.episode}</p>
        </div>
      ) : (
        <div>Chargement...</div> // Affiche ceci pendant le chargement des données
      )}
    </div>
  );
}

export default CitationPage;
