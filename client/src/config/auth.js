import ClientOAuth2 from 'client-oauth2';

const client = new ClientOAuth2({
  clientId: '15469085-5ed1-49ea-9b14-0429a79aaa72',
  authorizationUri: 'https://login.microsoftonline.com/common/oauth2/authorize',
  redirectUri: 'http://localhost:3000/login',
  query: {
    resource: '15469085-5ed1-49ea-9b14-0429a79aaa72'
  }
});

export default client;

export const authRedirect = () =>  {
  window.location.assign(client.token.getUri());
}

export const authCallback = (uri) => {
  return client.token.getToken(uri || window.location.href);
}
