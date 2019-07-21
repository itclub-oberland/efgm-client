const {google} = require('googleapis');

/*******************/
/** CONFIGURATION **/
/*******************/

const googleConfig = {
  clientId: '489012444936-nu13cu6tgsjb87ft77trdnccs5eh0i57.apps.googleusercontent.com', // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: 'gkt9diba2UnE5qc67kh15R1R', // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: 'http://localhost:3000/authentication/googleCode', // this must match your google api settings
};

const oauth2Client = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirect
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
});

oauth2Client.on('tokens', (tokens) => {
  if (tokens.refresh_token) {
    // store the refresh_token in my database!
    // console.log('REFRESHTEN 1', tokens.refresh_token);
  }
  //console.log('REFRESHTEN 2', tokens.access_token);
});

async function getGoogleAccountFromCode(code) {
  try {
    const tokens = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    oauth2Client.credentials = { access_token : tokens.tokens.access_token };

    const plus = google.plus('v1');
    const me = await plus.people.get({ userId: 'me', auth: oauth2Client });
    const userGoogleId = me.data.id;
    const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
    return {
      id: userGoogleId,
      email: userGoogleEmail,
      tokens: tokens,
    };
  } catch (error) {
    console.error('ERROR******', error);
  }
}


module.exports = {
  getUrl : url,
  getGoogleAccountFromCode
}
