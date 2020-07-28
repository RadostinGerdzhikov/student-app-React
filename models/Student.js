const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String, required: true
  },
  email: {
    type: String, required: true
  },
  age: {
    type: Number, required: true
  },
  phoneNumber: {
    type: Number, required: true
  },
  showComponent: {
    type: Boolean,  required: true
  },
  englishLevel: {
    type: String,  required: true 
  },
  selectedDay: {
    type: Date,
    required: true
    
  },
  technicalSkillsCourses:{
    type: String
  },
  personalPresentation:{
    type: String
  },
   studyFromHome:{ //checkbox
      type: String
  }
  }, {
    collection: 'students'
  })

//   Name - text, required
// Email - text, required
// Age - number, required
// Phone Number - text, required
// Preferred Way of Communication - radio buttons for Email and Phone, required
// English Level - select with options, required
// Available to Start - date, required
// Technical Skills and Courses - text
// Short Personal Presentation (e.g. reason for joining the program) - text
// "Study from home" - checkbox

module.exports = mongoose.model('Student', studentSchema)