import { getUser } from './auth';

export const secure = () => {
  const requestInit = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  return getUser()
    .then(user => user.sign(requestInit))
    .then(request => fetch('/api/ping/secure', requestInit))
    .then(response => response.json());
}
