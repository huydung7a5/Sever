var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Nguyễn Hữu Dũng' , logo:"https://firebasestorage.googleapis.com/v0/b/shopbanhang-f7094.appspot.com/o/SanPham%2F370220375_1343906593193085_2059355967262022596_n.png?alt=media&token=c7dab8ee-466c-4dbe-918b-7446bed4c40a&_gl=1*c6owek*_ga*MTYyNDkwMzg4OS4xNjk0NDgzMTE1*_ga_CW55HF8NVT*MTY5Njk0OTQ4OC4xNi4xLjE2OTY5NTA2NjQuNDguMC4w" });
});

module.exports = router;