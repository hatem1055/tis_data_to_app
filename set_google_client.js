const CLIENT_ID =
"977472112053-nif14kvvnv8p3pr8utbik0ckg82f8lvg.apps.googleusercontent.com";
const API_KEY = "AIzaSyAd-r1hQcVAzEB55Xf5rIjFNIlZHUWfMLc";

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC =
"https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";

let tokenClient;
let gapiInited = false;
let gisInited = false;
function gapiLoaded() {
    gapi.load("client", initializeGapiClient);
  }
  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
  }

function gisLoaded() {
tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: "", // defined later
});

gisInited = true;
}
