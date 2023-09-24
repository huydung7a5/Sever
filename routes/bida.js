var express = require('express');
var router = express.Router();
var modelbida = require('../models/bida');

var multer = require('multer');
// // thêm ảnh
const cloudinary = require('../configs/cloundinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'bida',
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],

});
const upload = multer({
    storage: storage,
});
router.get('/', async function (req, res, next) {

    var data = await modelbida.find();
    res.json(data);
});

router.get("/delete", async function (req, res, next) {
    try {
        var id = req.query.id;
        await modelbida.findByIdAndDelete(id);
        res.json({ status: 1, message: "Xóa Thành Công" });
    } catch (err) {
        res.json({ status: 0, message: "Xóa Thất Bại", err: err });
    }
});
router.post('/edit', async function (req, res, next) {
    try {
        const { _id, name1, name2, Score1, Score2, title, Second1, Second2, raceto, image1, image2, image3 } = req.body;

        var item = await modelbida.findById(_id);
        // tao model
        if (item) {
            item.name1 = name1 ? name1 : item.name1;
            item.name2 = name2 ? name2 : item.name2;
            item.Score1 = Score1 ? Score1 : item.Score1;
            item.Score2 = Score2 ? Score2 : item.Score2;
            item.Second1 = Second1 ? Second1 : item.Second1;
            item.Second2 = Second2 ? Second2 : item.ScoSecond2re2;
            item.raceto = raceto ? raceto : item.raceto;
            // item.image1 = image1 ? image1 : item.image1;
            // item.image2 = image2 ? image2 : item.image2;
            // item.image3 = image2 ? image3 : item.image3;
            item.title = title ? title : item.title;
            await item.save();
            res.json({ status: 1, message: "Sửa trận đấu thành công" });
        }
    } catch (err) {
        res.json({ status: 0, message: "Sửa trận đấu thất bại" });
    }
});
router.post('/add', upload.fields([{ name: 'image', maxCount: 3 }]), async (req, res) => {
    try {
        const image = req.files['image'][0];
        const image1 = req.files['image'][1];
        const image2 = req.files['image'][2];
        const { name1, name2, Score1, Score2, title, Second1, Second2, raceto, iddate } = req.body;
        const newInsert = { name1, name2, Score1, Score2, title, Second1, Second2, raceto, iddate, image: image.path, image1: image1.path, image2: image2.path };
        await modelbida.create(newInsert);

        res.json({ status: 1, message: ' thêm thành công' });
    } catch (error) {
        res.json({ status: 0, message: 'thêm thất bại' });
    }
});
router.get('/detail', async (req, res) => {
    try {
        var id = req.query.id;
        var data = await modelbida.find({ _id: id });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

router.get('/detail/date', async (req, res) => {
    try {
        var iddate = req.query.iddate;
        var data = await modelbida.find({ iddate: iddate });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

module.exports = router;