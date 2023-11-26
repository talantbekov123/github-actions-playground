// app.test.js

const request = require('supertest');
const app = require('./app'); // Import your Express app

describe('GET /api/greet', () => {
  test('It should respond with a JSON object containing a greeting', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
