const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  finishedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  current_lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  isActive: Boolean,
  isCompleted: Boolean,
  dateLastActivity: Date,
});

const CourseEnrollment = mongoose.model("CourseEnrollment", schema);
module.exports = { CourseEnrollment, schema };
