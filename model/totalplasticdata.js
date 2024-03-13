const mongoose = require("mongoose");

const totaldata = new mongoose.Schema({
  HDPE: { type: Number, default: 0 },
  LDPE: { type: Number, default: 0 },
  PET: { type: Number, default: 0 },
  PP: { type: Number, default: 0 },
  PS: { type: Number, default: 0 },
  PVC: { type: Number, default: 0 },
  //   Others: { type: Number, default: 0 },
});

const TotalPlasticData = mongoose.model("TotalPLasticData", totaldata);

module.exports = TotalPlasticData;
