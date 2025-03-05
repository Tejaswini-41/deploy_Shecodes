import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  expertise: {
    type: [String],
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://www.sincera.in/wp-content/uploads/2017/05/what-is-mentoring.jpg'
  }
}, {
  timestamps: true
});

const Mentor = mongoose.model('Mentor', mentorSchema);
export default Mentor;