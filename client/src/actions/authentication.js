
export const HANDLE_LOGIN = 'HANDLE_LOGIN';

export const handleLogin = (user) => ({
  type: HANDLE_LOGIN,
  user: user,
});