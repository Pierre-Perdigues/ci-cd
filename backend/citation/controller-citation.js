const axios = require('axios');

// recuperre la citation
exports.getCitation = async (req, res) => {
  try {
    // appell à l'API distante
    const response = await axios.get('https://kaamelott.chaudie.re/api/random');
    const citation = response.data;
    res.json(citation);
  } catch (error) {
    console.error('Erreur lors de la récupération de la citation:', error);
    res.status(500).json({ message: "Erreur lors de la récupération de la citation" });
  }
};
