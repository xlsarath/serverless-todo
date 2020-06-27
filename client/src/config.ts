// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '7c68g6pqab'
const region = 'us-east-1'
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'xlsarath.us.auth0.com',            // Auth0 domain
  clientId: 'dJGJv0wOWezVaCm6PBec2Wbi1pm8Ghpu',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
