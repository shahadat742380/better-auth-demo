import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000/prod/api/v1/auth",
  disableCSRFTokenCheck: true,
});
