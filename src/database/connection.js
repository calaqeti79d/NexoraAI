// Database connection module

const config = require('../config');

class DatabaseConnection {
  constructor() {
    this.connection = null;
    this.isConnected = false;
  }

  async connect() {
    try {
      // Database connection logic placeholder
      console.log('Connecting to database...');
      this.isConnected = true;
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection failed:', error.message);
      throw error;
    }
  }

  async disconnect() {
    if (this.connection) {
      // Disconnect logic placeholder
      this.isConnected = false;
      console.log('Database disconnected');
    }
  }

  getConnection() {
    if (!this.isConnected) {
      throw new Error('Database not connected');
    }
    return this.connection;
  }
}

module.exports = new DatabaseConnection();