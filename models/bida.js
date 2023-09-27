const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const bida = new Schema({
    id: { type: ObjectId }, // khóa chính 
    name1: { type: String },
    name2: { type: String },
    Score1: { type: Number },
    Score2: { type: Number },
    Second2: { type: Number },
    Second1: { type: Number },
    raceto: { type: Number },
    title: { type: String },
    image: { type: String },
    image1: { type: String },
    image2: { type: String },
    iddate: { type: String, trim: true, }
},
    {
        timestamps: true,
        versionKey: false, // Here You have to add.
    });
module.exports = mongoose.models.bida || mongoose.model('bida', bida);