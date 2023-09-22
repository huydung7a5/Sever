// var express = require('express');
// var router = express.Router();
// var modelimage = require('../models/image');
// // thêm ảnh
// const cloudinary = require('../configs/cloundinary');
// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     folder: 'bida',
//     allowedFormats: ["jpg", "png", "jpeg"],
//     transformation: [{ width: 500, height: 500, crop: "limit" }],
  
// });
// const upload = multer({
//      storage: storage,
// });
// router.post('/upload', upload.fields ([{ name: 'img', maxCount: 3 }]), async (req, res) => {
//     try {
//         const { url1, url2, url3 } = req.body;
//         // tao model
//         const newInsert = { url1, url2, url3 };
//         const files = req.files['img'][0];
//         const files1 = req.files['img'][1];
//         const files2 = req.files['img'][2];
//         if (files && files1 && files2) {
//             newInsert.url1 = files.img[0];
//             newInsert.url2 = files1.img[1];
//             newInsert.url3 = files2.img[2];
//         }
//         await modelbida.create(newInsert);
//         res.send("ảnh 1" + files + " ảnh 2" + files1 + "ảnh 3" + files2);
//     } catch (error) {
//         res.status(500).json({ error: 'Lỗi server' });
//     }
// });
// router.get('/', async function (req, res, next) {
//     var data = await modelimage.find();
//     res.json(data);
// });
// module.exports = router;
