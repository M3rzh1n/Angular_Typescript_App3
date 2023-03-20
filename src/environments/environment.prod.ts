export const environment = {
  production: true,
  auth0: {
    domain: 'dev-isoft.us.auth0.com',
    clientId: 'MsRerHg8873JiTXZzpwxkNKrjBoEi3p3',
    authorizationParams: {
      redirect_uri: 'https://m3rzh1n.github.io/Angular_Typescript_App3/callback',
      connection: "email",
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: '',
  },
};
