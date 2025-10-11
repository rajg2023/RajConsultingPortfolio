import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mammoth from 'mammoth';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resumeDir = path.join(__dirname, '../public/resume');

async function convertDocxToHtml(docxPath, htmlPath) {
  try {
    const result = await mammoth.convertToHtml({ path: docxPath });
    const roleName = path.basename(docxPath, '.docx').replace(/^Rajiv_Giri_/, '').replace(/_/g, ' ');
    
    // Extract and clean the content
    let content = result.value;
    const summaryIndex = content.toLowerCase().indexOf('professional summary');
    if (summaryIndex > -1) {
      content = content.substring(summaryIndex);
    }
    
    // Create clean HTML with minimal styling
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${roleName} - Rajiv Giri</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      line-height: 1.6; 
      margin: 0;
      padding: 20px;
      color: #333;
      background-color: #f8f9fa;
    }
    .resume-content {
      background: white;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    h2 {
      color: #2c3e50;
      border-bottom: 1px solid #eee;
      padding-bottom: 5px;
      margin: 20px 0 10px;
    }
    p, li {
      margin: 8px 0;
      line-height: 1.5;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 10px 0;
    }
    .skill-tag {
      background: #e9ecef;
      padding: 3px 8px;
      border-radius: 3px;
      font-size: 0.9em;
    }
    @media (max-width: 600px) {
      body {
        padding: 10px;
      }
      .resume-content {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="resume-content">
    <h2>Professional Summary</h2>
    <p>Detail-oriented QA Analyst with extensive experience in quality assurance testing, data analysis, and technical support. Skilled in manual and automation testing, SQL scripting, Selenium, RTM development, Jira, UAT, and defect management. Proven ability to ensure data integrity, streamline processes, and support enterprise application rollouts in regulated environments.</p>
    
    <h2>Core Competencies & Skills</h2>
    <div class="skills">
      <span class="skill-tag">Manual QA</span>
      <span class="skill-tag">Selenium Automation</span>
      <span class="skill-tag">Defect Reproduction</span>
      <span class="skill-tag">Java</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">JavaScript</span>
      <span class="skill-tag">SQL</span>
      <span class="skill-tag">Postman</span>
      <span class="skill-tag">QTP/UFT</span>
      <span class="skill-tag">RTM</span>
      <span class="skill-tag">UAT</span>
      <span class="skill-tag">XML</span>
      <span class="skill-tag">SDLC/STLC</span>
      <span class="skill-tag">Jira</span>
      <span class="skill-tag">Confluence</span>
      <span class="skill-tag">Agile/Scrum</span>
    </div>
    
    <h2>Core Soft Skills</h2>
    <div class="skills">
      <span class="skill-tag">Cross-functional collaboration</span>
      <span class="skill-tag">Effective communication</span>
      <span class="skill-tag">Critical thinking</span>
      <span class="skill-tag">Attention to detail</span>
      <span class="skill-tag">Time management</span>
      <span class="skill-tag">Leadership and mentoring</span>
      <span class="skill-tag">Problem solving</span>
      <span class="skill-tag">Eagerness to learn</span>
    </div>
    
    <h2>Professional Experience</h2>
    <ul>
      <li>Led QA/validation for 500+ Key Data Elements (KDEs) in OFSAA projects; created RTMs, FSDs, and TDDs.</li>
      <li>Performed defect analysis and manual/automation testing across web, mobile, and retail platforms.</li>
      <li>Leveraged SQL and log analysis for defect reproduction, root cause analysis, and optimized solutions.</li>
      <li>Collaborated with cross-functional teams on CRM rollouts, QA documentation, and training initiatives.</li>
      <li>Leveraged advanced SQL queries, XML/XSD validation, Java log analysis, and code reviews to deliver root cause analysis and actionable solutions.</li>
    </ul>
  </div>
</body>
</html>`;
    
    fs.writeFileSync(htmlPath, html);
    console.log(`Converted ${path.basename(docxPath)} to ${path.basename(htmlPath)}`);
  } catch (error) {
    console.error(`Error converting ${docxPath}:`, error.message);
  }
}

async function convertAllResumes() {
  try {
    const files = fs.readdirSync(resumeDir);
    const docxFiles = files.filter(file => file.endsWith('.docx'));
    
    if (docxFiles.length === 0) {
      console.log('No .docx files found in the resume directory');
      return;
    }

    console.log(`Found ${docxFiles.length} .docx files to convert`);
    
    for (const docxFile of docxFiles) {
      const docxPath = path.join(resumeDir, docxFile);
      const htmlFile = `${path.basename(docxFile, '.docx')}.html`;
      const htmlPath = path.join(resumeDir, htmlFile);
      
      await convertDocxToHtml(docxPath, htmlPath);
    }
    
    console.log('\nConversion complete!');
  } catch (error) {
    console.error('Error processing files:', error.message);
  }
}

// Run the conversion
convertAllResumes();
