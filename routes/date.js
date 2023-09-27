var express = require('express');
var router = express.Router();
var modeldate = require('../models/date');

// lấy thông tin người dùng theo id
router.get('/', async function (req, res, next) {
    var data = await modeldate.find();
    res.json(data);
});

router.get("/delete", async function (req, res, next) {
    try {
        var id = req.query.id;
        await modeldate.findByIdAndDelete(id);
        res.json({ status: 1, message: "Xóa Thành Công" });
    } catch (err) {
        res.json({ status: 0, message: "Xóa Thất Bại", err: err });
    }
});
router.post('/edit', async function (req, res, next) {
    try {
        const { _id, date} = req.body;

        var item = await modeldate.findById(_id);
        // tao model
        if (item) {
            item.date = date ? date : item.date;
            await item.save();
            res.json({ status: 1, message: "Sửa ngày thành công" });
        }
    } catch (err) {
        res.json({ status: 0, message: "Sửa ngày thất bại" });
    }
});
router.post('/add', async function (req, res, next) {
    try {
        const { date} = req.body;
      const newInsert = {date};
      await modeldate.create(newInsert);
  
      res.json({ status: 1, message: ' thêm thành công' });
    } catch (error) {
      res.json({ status: 0, message: 'thêm thất bại' });
    }
  });

module.exports = router;