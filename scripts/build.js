#!/usr/bin/env node

// Build script for Nexora AI

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔨 Building Nexora AI...');

// Clean previous build
const buildDir = path.join(process.cwd(), 'dist');
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
  console.log('🧹 Cleaned previous build');
}

// Create build directory
fs.mkdirSync(buildDir, { recursive: true });

try {
  // Copy source files
  console.log('📁 Copying source files...');
  execSync('xcopy /E /I /Y src dist\\src', { stdio: 'inherit' });
  
  // Copy configuration files
  const configFiles = ['package.json', '.env.example', 'README.md'];
  configFiles.forEach(file => {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, path.join(buildDir, file));
      console.log(`✅ Copied ${file}`);
    }
  });

  // Create production package.json
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  delete packageJson.devDependencies;
  packageJson.scripts = {
    start: 'node src/index.js'
  };
  
  fs.writeFileSync(
    path.join(buildDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  console.log('🎉 Build completed successfully!');
  console.log(`📦 Build output: ${buildDir}`);
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}