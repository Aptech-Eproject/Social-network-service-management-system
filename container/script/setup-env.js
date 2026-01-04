#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envMappings = [
  {
    source: 'container/env/frontend/.env.example',
    target: 'frontend/.env'
  },
  {
    source: 'container/env/api-gateway/.env.example',
    target: 'backend/api-gateway/.env'
  },
  {
    source: 'container/env/user-service/.env.example',
    target: 'backend/user-service/.env'
  },
  {
    source: 'container/env/social-service/.env.example',
    target: 'backend/social-service/.env'
  }
];

console.log('🔧 Setting up environment files...\n');

envMappings.forEach(({ source, target }) => {
  const sourcePath = path.join(__dirname, '..', '..', source);
  const targetPath = path.join(__dirname, '..', '..', target);

  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  Source not found: ${source}`);
    return;
  }

  if (fs.existsSync(targetPath)) {
    console.log(`✅ Already exists: ${target}`);
    return;
  }

  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ Created: ${target}`);
  } catch (error) {
    console.log(`❌ Failed to create: ${target}`);
    console.error(error.message);
  }
});

console.log('\n✅ Setup complete!');
console.log('\nNext steps:');
console.log('  1. Edit .env files with your configuration');
console.log('  2. Run: npm run dev');
