const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const so = new Schema
    ({
        id: { type: ObjectId }, // khóa chính 
        so: { type: Number },
        solanxuathien: { type: Number},
        tile: { type: Number}
    },);
module.exports = mongoose.models.so || mongoose.model('so', so);