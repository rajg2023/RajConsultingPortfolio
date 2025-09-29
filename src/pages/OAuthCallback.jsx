import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const { completeOAuthLogin, clearError } = useAuth();
  const [error, setError] = useState(null);

  useEffect(() => {
    const run = async () => {
      clearError?.();
      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        const state = params.get('state');
        const storedState = sessionStorage.getItem('oauth_state');
        const redirectUri = sessionStorage.getItem('oauth_redirect_uri');

        if (!code || !state) {
          throw new Error('Missing code or state in callback');
        }
        if (!storedState || storedState !== state) {
          throw new Error('Invalid OAuth state');
        }

        const proxyBase = import.meta.env.VITE_OAUTH_PROXY_URL;
        if (!proxyBase) {
          throw new Error('OAuth proxy is not configured. Set VITE_OAUTH_PROXY_URL');
        }

        // Exchange code for access token via secure proxy
        const exchangeRes = await fetch(`${proxyBase.replace(/\/$/, '')}/exchange`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, redirect_uri: redirectUri }),
        });
        if (!exchangeRes.ok) {
          const body = await exchangeRes.text();
          throw new Error(`Exchange failed (${exchangeRes.status}): ${body}`);
        }
        const exchangeData = await exchangeRes.json();

        // You may choose to have the proxy return the user profile directly.
        // Here we assume it returns an access_token and we fetch the user client-side.
        const accessToken = exchangeData.access_token;
        if (!accessToken) {
          throw new Error('No access token returned from proxy');
        }

        const userRes = await fetch('https://api.github.com/user', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (!userRes.ok) {
          throw new Error(`Failed to fetch GitHub user (${userRes.status})`);
        }
        const profile = await userRes.json();

        // Optionally fetch primary email if not present
        if (!profile.email) {
          try {
            const emailRes = await fetch('https://api.github.com/user/emails', {
              headers: { Authorization: `Bearer ${accessToken}` },
            });
            if (emailRes.ok) {
              const emails = await emailRes.json();
              const primary = Array.isArray(emails) ? emails.find(e => e.primary && e.verified) : null;
              if (primary?.email) profile.email = primary.email;
            }
          } catch (_) {
            // ignore email fetch errors
          }
        }

        // Finalize login in context
        completeOAuthLogin(profile);

        // Cleanup and go home (optionally to admin section)
        sessionStorage.removeItem('oauth_state');
        sessionStorage.removeItem('oauth_redirect_uri');
        navigate('/', { replace: true, state: { section: 'admin' } });
      } catch (e) {
        console.error('OAuth callback error:', e);
        setError(e.message || 'OAuth error');
      }
    };
    run();
  }, [completeOAuthLogin, clearError, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {!error ? (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Signing you in with GitHub…</p>
          </>
        ) : (
          <>
            <p className="text-red-600 font-medium mb-2">Authentication failed</p>
            <p className="text-gray-600">{error}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default OAuthCallback;
