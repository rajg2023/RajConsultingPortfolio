import React from 'react';

const ResumePathTester = () => {
  const testPaths = [
    '/resume/Rajiv_Giri_QA_Resume.html',
    '/RajConsultingPortfolio/resume/Rajiv_Giri_QA_Resume.html',
    'resume/Rajiv_Giri_QA_Resume.html'
  ];

  const checkPath = async (path) => {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      return { path, status: response.status, exists: response.ok };
    } catch (error) {
      return { path, status: 'error', exists: false, error: error.message };
    }
  };

  const runTests = async () => {
    const results = await Promise.all(testPaths.map(checkPath));
    console.table(results);
    return results;
  };

  return (
    <div style={{ padding: '20px', background: '#f5f5f5', margin: '20px', borderRadius: '8px' }}>
      <h3>Resume Path Tester</h3>
      <p>Click the button below to test which paths work for resume files:</p>
      <button 
        onClick={runTests}
        style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Test Resume Paths
      </button>
      <div style={{ marginTop: '20px' }}>
        <strong>Current Environment:</strong>
        <ul>
          <li>Hostname: {window.location.hostname}</li>
          <li>Pathname: {window.location.pathname}</li>
          <li>Protocol: {window.location.protocol}</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumePathTester;
