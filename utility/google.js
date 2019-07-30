const {google} = require('googleapis');
const _ = require('lodash');
const axios = require('axios');

const googleAuthUrl = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';

const googleConfig = {
  clientId: '489012444936-nu13cu6tgsjb87ft77trdnccs5eh0i57.apps.googleusercontent.com',
  clientSecret: 'gkt9diba2UnE5qc67kh15R1R',
  redirect: 'http://localhost:3000/authentication/googleCode',
};

const oauth2Client = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirect
);

const scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email',
];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes
});

async function logOut(req, res) {
  try {
    const access_token = _.get(req, 'cookies.current_access_token', false);
    await axios.get(`https://accounts.google.com/o/oauth2/revoke?token=${access_token}`);

    await axios.get(`https://mail.google.com/mail/u/0/?logout&hl=en`);

  } catch (error) {
    console.error(_.get(error, 'data.error', false));
  } finally {
    res.cookie('current_user_email', '');
    res.cookie('current_access_token', '');
    res.redirect('/');
  }
}

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
  getGoogleAccountFromCode,
  logOut,
  googleAuthUrl
}
