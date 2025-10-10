import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function parsePdfResume(pdfPath) {
    try {
        // Dynamically import pdf-parse
        const pdf = (await import('pdf-parse')).default;
        
        // Read the PDF file
        const dataBuffer = await fs.promises.readFile(pdfPath);
        
        // Parse the PDF
        const data = await pdf(dataBuffer);
        
        // Basic text extraction
        const text = data.text;
        const lines = text.split('\n').filter(line => line.trim() !== '');
        
        // Initialize resume object
        const resume = {
            name: '',
            title: '',
            contact: {
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: ''
            },
            summary: '',
            experience: [],
            education: [],
            skills: []
        };

        // Basic parsing logic (customize based on your resume's structure)
        let currentSection = '';
        
        for (const line of lines) {
            const lowerLine = line.toLowerCase().trim();
            
            // Detect sections
            if (lowerLine.includes('experience') || lowerLine.includes('work experience')) {
                currentSection = 'experience';
                continue;
            } else if (lowerLine.includes('education')) {
                currentSection = 'education';
                continue;
            } else if (lowerLine.includes('skills') || lowerLine.includes('technical skills')) {
                currentSection = 'skills';
                continue;
            } else if (lowerLine.includes('summary') || lowerLine.includes('about')) {
                currentSection = 'summary';
                continue;
            }

            // Parse content based on current section
            switch(currentSection) {
                case 'experience':
                    // Add your experience parsing logic here
                    break;
                case 'education':
                    // Add your education parsing logic here
                    break;
                case 'skills':
                    if (line.trim()) {
                        resume.skills.push(line.trim());
                    }
                    break;
                case 'summary':
                    resume.summary += line + ' ';
                    break;
                default:
                    // Try to detect contact info
                    if (!resume.contact.email && line.includes('@')) {
                        resume.contact.email = line.trim();
                    } else if (!resume.name && line.trim()) {
                        // First non-empty line is likely the name
                        resume.name = line.trim();
                    }
            }
        }

        return resume;
        
    } catch (error) {
        console.error('Error parsing PDF:', error);
        throw error;
    }
}

export default parsePdfResume;
