var express = require('express');
var _ = require('lodash');
var googleUtil = require('../utility/google');
var router = express.Router();

/* GET home page. */
router.get('/googleUrl', function(req, res, next) {
  const result = googleUtil.getUrl;
  res.status(200).json(result);
});

router.get('/googleCode', async function(req, res, next) {
  const code = req.query.code;
  const data = await googleUtil.getGoogleAccountFromCode(code);
  res.cookie('current_user_email', data.email);
  res.cookie('current_user_token', data.tokens.tokens.id_token);
  res.redirect('/management');
});

router.post('/getByCookie', function(req, res, next) {
  if( _.get(req, 'body.cookie.token', false) &&  _.get(req, 'body.cookie.email', false))
  {
    // TODO check with google to validate token. and get wep api requests
    res.json({'authorized': true});
  } else {
    res.json({'authorized': false});
  }
});

router.get('/getTokens', function(req, res, next) {
  res.json({});
});

module.exports = router;
