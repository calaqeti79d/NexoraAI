// AI Service Unit Tests

const AIService = require('../../src/services/aiService');

describe('AIService', () => {
  let aiService;

  beforeEach(() => {
    aiService = new AIService();
  });

  describe('initialization', () => {
    test('should initialize successfully', async () => {
      await aiService.initialize();
      expect(aiService.initialized).toBe(true);
    });
  });

  describe('processData', () => {
    beforeEach(async () => {
      await aiService.initialize();
    });

    test('should process data successfully', async () => {
      const testData = { input: 'test data' };
      const result = await aiService.processData(testData);
      
      expect(result).toHaveProperty('processed', true);
      expect(result).toHaveProperty('result');
      expect(result).toHaveProperty('timestamp');
    });

    test('should throw error when not initialized', async () => {
      const uninitializedService = new AIService();
      const testData = { input: 'test' };
      
      await expect(uninitializedService.processData(testData))
        .rejects.toThrow('AI Service not initialized');
    });
  });
});