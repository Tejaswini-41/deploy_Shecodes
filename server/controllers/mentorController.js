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

export const createMentor = async (req, res) => {
    try {
      console.log('Received mentor data:', req.body);
      
      const { name, role, company, expertise, availability, avatar } = req.body;
      
      // Ensure expertise is an array
      const expertiseArray = Array.isArray(expertise) ? expertise : 
        typeof expertise === 'string' ? 
          expertise.split(',').map(item => item.trim()).filter(item => item !== '') :
          [];
      
      console.log('Processed expertise array:', expertiseArray);
      
      const mentor = new Mentor({
        name,
        role,
        company,
        expertise: expertiseArray,
        availability,
        avatar: avatar || '/Images/mentors/default.jpg'
      });
  
      console.log('Created mentor object:', mentor);
      
      const createdMentor = await mentor.save();
      console.log('✅ Mentor saved to database:', createdMentor);
      res.status(201).json(createdMentor);
    } catch (error) {
      console.error('❌ Error in createMentor:', error);
      res.status(400).json({ message: error.message });
    }
  };