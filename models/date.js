const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const date = new Schema({
    id: { type: ObjectId }, // khóa chính 
    date: { type: String}
},
    {
        timestamps: true,
        versionKey: false, // Here You have to add.
    });
module.exports = mongoose.models.date || mongoose.model('date', date);