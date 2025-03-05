import Mentor from '../models/Mentor.js';

// Get all mentors
export const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find({});
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new mentor
export const createMentor = async (req, res) => {
  try {
    const { name, role, company, expertise, availability, avatar } = req.body;
    
    // Convert expertise string to array if it's sent as a string
    const expertiseArray = Array.isArray(expertise) 
      ? expertise 
      : expertise.split(',').map(item => item.trim()).filter(item => item !== '');
    
    const mentor = new Mentor({
      name,
      role,
      company,
      expertise: expertiseArray,
      availability,
      avatar: avatar || '/Images/mentors/default.jpg'
    });

    const createdMentor = await mentor.save();
    res.status(201).json(createdMentor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};