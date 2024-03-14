const { getAllPrenoms } = require('./controller-prenom');
const Prenom = require('./modele-prenom');

// Mock du modèle Prenom
jest.mock('./modele-prenom', () => ({
  findAll: jest.fn()
}));

describe("Test de l'API Prénom", () => {
  it("getAllPrenoms retourne un tableau de prénoms", async () => {
    // Configuration du mock pour `findAll`
    Prenom.findAll.mockResolvedValue([{ idPrenom: 1, valeurPrenom: 'Alice' }, { idPrenom: 2, valeurPrenom: 'Bob' }]);

    // Création des mocks pour `req` et `res`
    const req = {};
    const res = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis() // Pour permettre l'encadrement: res.status().send()
    };

    // Appel de la fonction avec les mocks
    await getAllPrenoms(req, res);

    // Vérifications
    expect(res.status).not.toHaveBeenCalledWith(500); // Assurez-vous que le statut 500 n'a pas été envoyé
    expect(res.send).toHaveBeenCalledWith(expect.any(Array)); // Vérifiez que `send` a été appelé avec un tableau
    expect(res.send.mock.calls[0][0].length).toBe(2); // Vérifiez que le tableau contient 2 prénoms
  });
});
