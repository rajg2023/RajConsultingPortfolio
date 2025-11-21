import React from 'react';

const TestError = () => {
  // This will trigger the error boundary
  throw new Error('This is a test error for the error boundary');
};

export default TestError;