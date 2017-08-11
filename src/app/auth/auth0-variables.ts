interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'nNnNaiayJNlkgcJsoG5G9AABEdffJzgI',
  domain: 'pyke.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
