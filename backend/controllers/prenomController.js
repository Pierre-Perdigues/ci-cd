const getPrenoms = (req, res) => {
    // Logique pour récupérer les prénoms depuis la base de données
    res.json(["Alice", "Bob"]); // Exemple statique
  };
  
  module.exports = { getAllPrenoms: getPrenoms };
  