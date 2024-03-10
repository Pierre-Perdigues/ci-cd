const Prenom = require('./modele-prenom');

exports.getAllPrenoms = async (req, res) => {
  try {
    const prenoms = await Prenom.findAll();
    res.json(prenoms);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
