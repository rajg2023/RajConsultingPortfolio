import path from 'path';
import { fileURLToPath } from 'url';
import parsePdfResume from './parsePdfResume.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your PDF resume
const pdfPath = path.join(__dirname, '../public/resume/resume.pdf');
const outputPath = path.join(__dirname, '../public/content/resume.json');

// Create content directory if it doesn't exist
const contentDir = path.join(__dirname, '../public/content');
if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
}

// Process the resume
parsePdfResume(pdfPath)
    .then(resumeData => {
        // Save the parsed data
        fs.writeFileSync(outputPath, JSON.stringify(resumeData, null, 2));
        console.log(`✅ Resume successfully parsed and saved to ${outputPath}`);
    })
    .catch(error => {
        console.error('❌ Error processing resume:', error);
        process.exit(1);
    });
