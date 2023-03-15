const mongoose = require("mongoose");
const { Schema } = mongoose;

const AttendanceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isPresent: {
    type: Boolean,
    required: true,
  },
});

const Attendance = mongoose.model("attendance", AttendanceSchema);

module.exports = Attendance;
