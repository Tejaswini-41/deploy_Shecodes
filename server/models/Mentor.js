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
    default: '/Images/mentors/default.jpg'
  }
}, {
  timestamps: true
});

const Mentor = mongoose.model('Mentor', mentorSchema);
export default Mentor;