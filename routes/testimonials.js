var express = require('express');
var router = express.Router();
//var contentful = require('contentful');
//var util = require('util');

/*var cfClient = contentful.createClient({
  space: 'pp2ia2q0yuv0',
  accessToken: '5186318ee3ef3a5fba6f33467cd47b18d3dcc396b8ad497e617857f719b18fae',
	agent: utilities.createProxyAgent()
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('testimonials', { title: 'Testimonials'});
});

module.exports = router;
