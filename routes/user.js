var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  res.json(req.params.id);
});

module.exports = router;
