// DEPRECATED: This file is kept for backward compatibility only.
// Please import `useAuth` from `src/contexts/AuthContext` going forward:
//   import { useAuth } from '../contexts/AuthContext';
// This re-export ensures a single source of truth for authentication state.

import { useAuth as useAuthContext } from '../contexts/AuthContext';

export const useAuth = () => useAuthContext();

