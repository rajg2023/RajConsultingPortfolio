import { useEffect, useState } from 'react';

export const usePublishedContent = () => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const base = import.meta.env.BASE_URL || '/';
        const url = new URL('content.json', window.location.origin + base).href;
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) setContent(data);
      } catch (e) {
        if (!cancelled) setError(e.message || 'Failed to load content');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { content, isLoading, error };
};
