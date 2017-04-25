
export const SESSION_LOADED = 'SESSION_LOADED';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';

export const sessionLoaded = (session) => ({
  type: SESSION_LOADED,
  session: session,
});

export const handleLogin = (user) => ({
  type: HANDLE_LOGIN,
  user: user,
});