const express = require('express');
const _ = require('lodash');
const axios = require('axios');

const googleUtil = require('../utility/google');
const router = express.Router();

router.get('/googleUrl', function(req, res, next) {
  const result = googleUtil.getUrl;
  res.status(200).json(result);
});

router.get('/googleCode', async function(req, res, next) {
  const code = req.query.code;
  const data = await googleUtil.getGoogleAccountFromCode(code);
  console.log(data);
  res.cookie('current_user_email', data.email);
  res.cookie('current_access_token', data.tokens.tokens.access_token);
  res.redirect('/management');
});

router.post('/getByCookie', async (req, res, next) => {

  const access_token = _.get(req, 'body.cookie.token', false);

  const authorizationRequest = await axios.get(`${googleUtil.googleAuthUrl}${access_token}`);

  const tokenValidUntil = _.get(authorizationRequest, 'data.expires_in', 0);

  const isAuthorized = tokenValidUntil > 0 ? true : false;

  res.json({'authorized': isAuthorized});
});

router.get('/logout', async (req, res, next) => {

  await googleUtil.logOut(req, res);

});

module.exports = router;
