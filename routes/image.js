var express = require('express');
var router = express.Router();
var modelimage = require('../models/image');
var multer = require('multer');
// // thêm ảnh
const cloudinary = require('../configs/cloundinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const app = require('../app');
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'bida',
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  
});
const upload = multer({
     storage: storage,
});
router.post('/upload', upload.array ([{ name: 'uri', maxCount: 3 }]), async (req, res) => {
    try {
        // tao model
        const url1 = req.files['uri'][0];
        const url2 = req.files['uri'][1];
        const url3 = req.files['uri'][2];
        const newInsert = { url1: url1.path, url2: url2.path, url3: url3.path };
        await modelimage.create(newInsert);
        res.json({ status: 1, message: ' thêm thành công' });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});
router.get('/', async function (req, res, next) {
    var data = await modelimage.find();
    res.json(data);
});


module.exports = router;
