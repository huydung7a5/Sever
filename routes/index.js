var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Trang chủ',name:'đây là trang test 1' });
});

module.exports = router;