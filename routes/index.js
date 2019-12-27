var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Hello World' });
  // res.json({fuck:true});
  let obj = {};
  obj.love = 1015;
  res.json(obj);
});

module.exports = router;
