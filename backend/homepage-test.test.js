const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    // Vérifie que le corps de la réponse contient message`
    expect(response.body).toHaveProperty('message');
    // Vérifie le contenu de message
    expect(response.body.message).toBe('Hello from the backend');
    
  });
});
