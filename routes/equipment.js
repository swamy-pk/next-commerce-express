var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "setTopBox": {"colors":["black","white"]}, "liteBox": {"colors":[{"black":"10"},{"white":"10"}]}}));
});

module.exports = router;
