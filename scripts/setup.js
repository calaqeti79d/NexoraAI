#!/usr/bin/env node

// Setup script for Nexora AI

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Nexora AI...');

// Create necessary directories
const directories = [
  'logs',
  'uploads',
  'temp',
  'data'
];

directories.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Check environment file
const envPath = path.join(process.cwd(), '.env');
const envExamplePath = path.join(process.cwd(), '.env.example');

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  fs.copyFileSync(envExamplePath, envPath);
  console.log('✅ Created .env file from .env.example');
}

console.log('🎉 Setup completed successfully!');
console.log('📝 Please update your .env file with appropriate values');
console.log('🚀 Run "npm start" to launch Nexora AI');