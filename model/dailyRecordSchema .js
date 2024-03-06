const mongoose = require('mongoose');

const dailyRecordSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  collection: {
    HDPE: { type: Number, default: 0 },
    LDPE: { type: Number, default: 0 },
    PET: { type: Number, default: 0 },
    PP: { type: Number, default: 0 },
    PS: { type: Number, default: 0 },
    PVC: { type: Number, default: 0 },
    Others: { type: Number, default: 0 }
  }
});

const DailyRecord = mongoose.model('DailyRecord', dailyRecordSchema);

module.exports = DailyRecord;
