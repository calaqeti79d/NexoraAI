// AI Controller

const AIService = require('../services/aiService');
const Logger = require('../utils/logger');

class AIController {
  constructor() {
    this.aiService = new AIService();
  }

  async processRequest(req, res) {
    try {
      const { input, options } = req.body;
      
      if (!input) {
        return res.status(400).json({ error: 'Input is required' });
      }

      const result = await this.aiService.processData(input, options);
      
      Logger.info(`AI processing completed for request ${req.id}`);
      
      res.json({
        success: true,
        data: result,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      Logger.error(`AI processing failed: ${error.message}`);
      res.status(500).json({ error: 'Processing failed' });
    }
  }

  async getModels(req, res) {
    try {
      const models = await this.aiService.getAvailableModels();
      res.json({ models });
    } catch (error) {
      Logger.error(`Failed to get models: ${error.message}`);
      res.status(500).json({ error: 'Failed to retrieve models' });
    }
  }
}

module.exports = AIController;