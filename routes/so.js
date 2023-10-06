var express = require('express');
var router = express.Router();
var modelso = require('../models/so');

// lấy thông tin người dùng theo id
router.get('/', async function (req, res, next) {
  var so = await modelso.find();
  res.json(so);
});

router.post('/add', async function (req, res, next) {
  try {
    const { so, solanxuathien, tile } = req.body;
    const newInsert = { so, solanxuathien, tile };
    await modelso.create(newInsert);

    res.json({ status: 1, message: ' thêm thành công' });
  } catch (error) {
    res.json({ status: 0, message: 'thêm thất bại' });
  }
});
router.post('/edit', async function (req, res, next) {
  try {
    const { _id,so, solanxuathien, tile } = req.body;

    var item = await modelso.findById(_id);
    // tao model
    if (item) {
      item.so = so ? so : item.so;
      item.solanxuathien = solanxuathien ? solanxuathien : item.solanxuathien;
      item.tile = tile ? tile : item.tile;
      await item.save();
      res.json({ status: 1, message: "Sửa thành công" });
    }
  } catch (err) {
    res.json({ status: 0, message: "Sửa thất bại" });
  }

})

module.exports = router;