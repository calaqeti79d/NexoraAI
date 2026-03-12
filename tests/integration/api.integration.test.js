// API Integration Tests

const request = require('supertest');
const app = require('../../src/index');

describe('API Integration Tests', () => {
  describe('Health Endpoint', () => {
    test('GET /api/health should return system status', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect(200);
      
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('AI Processing Endpoint', () => {
    test('POST /api/ai/process should accept valid data', async () => {
      const testData = {
        input: 'Hello, world!',
        options: { model: 'default' }
      };
      
      const response = await request(app)
        .post('/api/ai/process')
        .send(testData)
        .expect(200);
      
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('data');
    });

    test('POST /api/ai/process should reject empty data', async () => {
      const response = await request(app)
        .post('/api/ai/process')
        .send({})
        .expect(400);
      
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Analytics Endpoint', () => {
    test('GET /api/analytics should return analytics data', async () => {
      const response = await request(app)
        .get('/api/analytics')
        .expect(200);
      
      expect(response.body).toHaveProperty('analytics');
    });
  });
});