import Event from '../models/Event.js';

// Get all events
export const getEvents = async (req, res) => {
  try {
    console.log('Fetching all events from database...');
    const events = await Event.find({}).sort({ date: 1 }); // Sort by date ascending
    console.log(`Successfully fetched ${events.length} events`);
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Create a new event
export const createEvent = async (req, res) => {
  try {
    console.log('Creating a new event with data:', req.body);
    const { title, date, time, location, attendees, image } = req.body;
    
    const event = new Event({
      title,
      date,
      time,
      location,
      attendees: Number(attendees) || 0,
      image: image || '/Images/events/default.jpg'
    });

    const createdEvent = await event.save();
    console.log('✅ Event successfully saved to database with ID:', createdEvent._id);
    res.status(201).json(createdEvent);
  } catch (error) {
    console.error('❌ Error saving event to database:', error.message);
    res.status(400).json({ message: error.message });
  }
};