const mongoose=require("mongoose")
const monthlyTotalSchema = new mongoose.Schema({
    month: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    totalCollection: {
      HDPE: { type: Number, default: 0 },
      LDPE: { type: Number, default: 0 },
      PET: { type: Number, default: 0 },
      PP: { type: Number, default: 0 },
      PS: { type: Number, default: 0 },
      PVC: { type: Number, default: 0 },
      Others: { type: Number, default: 0 }
    }
  });
  
  const MonthlyTotal = mongoose.model('MonthlyTotal', monthlyTotalSchema);
  
  module.exports = MonthlyTotal;
  