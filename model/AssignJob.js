const mongoose = require('mongoose');

// Create Schema
const AssigID = mongoose.Schema({
  JobID: {
    type: String,
    require: true,
  },
  JobcreatorUSerID: {
    type: String,
    require: true,
  },
  JobAssigntoUSerID: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('AssignJob', AssigID);
