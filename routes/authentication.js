var express = require('express');
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
  res.cookie('current_user_email', JSON.stringify(data.email));
  res.cookie('current_user_token', JSON.stringify(data.tokens.tokens.id_token));
  res.redirect('/management');
});

router.post('/getByCookie', function(req, res, next) {

  console.log('RELATED COOKIE', req.cookies)
  res.json({'authorized': true});
});

router.get('/getTokens', function(req, res, next) {
  res.json({});
});

module.exports = router;
