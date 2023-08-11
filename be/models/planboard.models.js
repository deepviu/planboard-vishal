const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rules = new Schema({
  LLY_topup: String,
  LY_topup: String,
  Potential: String,
  Seasonal_time : String,
  Anyother_condition: String
});

module.exports = mongoose.model("planBoard", rules);
