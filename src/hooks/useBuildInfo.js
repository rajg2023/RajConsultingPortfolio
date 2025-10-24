// src/hooks/useBuildInfo.js
import { useState, useEffect } from 'react';

// Fallback data in case the build-info.json is not available
const FALLBACK_INFO = {
  lastUpdated: new Date().toISOString(),
  githubUsername: 'rajg2023',
  version: '1.0.0'
};

export function useBuildInfo() {
  const [buildInfo, setBuildInfo] = useState({
    ...FALLBACK_INFO,
    isLoading: true
  });

  useEffect(() => {
    const fetchBuildInfo = async () => {
      try {
        const response = await fetch('/build-info.json');
        if (!response.ok) {
          throw new Error('Build info not found');
        }
        const data = await response.json();
        setBuildInfo({
          ...data,
          isLoading: false
        });
      } catch (error) {
        console.warn('Using fallback build info:', error.message);
        setBuildInfo({
          ...FALLBACK_INFO,
          isLoading: false
        });
      }
    };

    fetchBuildInfo();
  }, []);

  return {
    ...buildInfo,
    formattedDate: buildInfo.lastUpdated ? new Date(buildInfo.lastUpdated).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }) : 'Unknown'
  };
}