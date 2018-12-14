var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "plans":[{"name":"Platinum allHD","cost":"99.99","validity":"mo"},{"name":"Titanium allHD","cost":"49.99","validity":"mo"}] }));
});

module.exports = router;
