const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const image = new Schema({
    id: { type: ObjectId }, // khóa chính 
    url1: { type: String},
    url2: { type: String},
    url3: { type: String},
},
    {
        timestamps: true,
        versionKey: false, // Here You have to add.
    });
module.exports = mongoose.models.image || mongoose.model('image', image);