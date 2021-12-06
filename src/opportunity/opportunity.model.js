const mongoose = require("mongoose");

const OpportunitySchema = new mongoose.Schema({
  date_opportunities: {
    type: Date,
    required: true,
  },
  ids_opportunities: {
    type: Array,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("OpportunityAggregation", OpportunitySchema);
