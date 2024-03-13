const request = require('supertest');
const app = require('./app'); // Ajustez le chemin selon la structure de votre projet

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    // Vérifiez que le corps de la réponse contient une propriété spécifique, par exemple `citation`
    expect(response.body).toHaveProperty('message');
    // Vous pouvez également vérifier le contenu exact si vous connaissez la réponse attendue
    expect(response.body.message).toBe('Hello from the backend');
    
  });
});
