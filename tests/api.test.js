// API Tests

const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  test('GET /health should return OK status', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);
    
    expect(response.body.status).toBe('OK');
  });

  test('POST /ai/process should accept data', async () => {
    const testData = { input: 'test' };
    
    const response = await request(app)
      .post('/api/ai/process')
      .send(testData)
      .expect(200);
    
    expect(response.body.data).toEqual(testData);
  });
});