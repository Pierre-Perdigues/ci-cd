const Prenom = require('./modele-prenom');

// CRUD sur prénom
//Create
exports.createPrenom = async (req, res) => {
  try {
    const prenom = await Prenom.create(req.body);
    res.send(prenom);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Read
exports.getAllPrenoms = async (req, res) => {
  try {
    const prenoms = await Prenom.findAll();
    res.send(prenoms);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update
exports.updatePrenom = async (req, res) => {
  try {
    // Recherche par id
    const { id } = req.params;
    const [updated] = await Prenom.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPrenom = await Prenom.findOne({ where: { id: id } });
      res.status(200).json(updatedPrenom);
    } else {
      throw new Error('Prenom not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete
exports.deletePrenom = async (req, res) => {
  try {
    // Recherche par id
    const { id } = req.params;
    const deleted = await Prenom.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send("Prenom deleted");
    } else {
      throw new Error('Prenom not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
