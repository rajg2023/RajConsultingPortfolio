// scripts/generate-build-info.js
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

try {
  const lastCommitDate = execSync('git log -1 --format=%cI').toString().trim();
  const lastCommitUser = execSync('git log -1 --pretty=format:"%an"').toString().trim();
  
  const buildInfo = {
    lastUpdated: lastCommitDate,
    githubUsername: 'rajg2023',
    version: process.env.npm_package_version || '1.0.0'
  };

  // Ensure public directory exists
  const publicDir = join(process.cwd(), 'public');
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }

  writeFileSync(
    join(publicDir, 'build-info.json'),
    JSON.stringify(buildInfo, null, 2)
  );
  console.log('Build info generated successfully');
} catch (error) {
  console.error('Error generating build info:', error);
  // Don't throw error to prevent build from failing
}