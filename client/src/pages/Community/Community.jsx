import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Community.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  // Add state for forms visibility
  const [showMentorForm, setShowMentorForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  
  // Add state for dynamic data
  const [discussions, setDiscussions] = useState([
    // ... existing discussions data
  ]);

  const [mentors, setMentors] = useState([
    // ... existing mentors data
  ]);

  const [events, setEvents] = useState([
    // ... existing events data
  ]);

  // Form state for mentor
  const [mentorForm, setMentorForm] = useState({
    name: '',
    role: '',
    company: '',
    expertise: '',
    availability: '',
    avatar: '/Images/mentors/default.jpg'
  });

  // Form state for event
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    attendees: 0,
    image: '/Images/events/default.jpg'
  });

  // Form state for discussion
  const [discussionForm, setDiscussionForm] = useState({
    title: '',
    tags: '',
    content: '',
    author: 'Current User', // Would typically come from authentication
    avatar: '/Images/avatars/default.jpg'
  });

  // Handle mentor form input changes
  const handleMentorInputChange = (e) => {
    const { name, value } = e.target;
    setMentorForm({
      ...mentorForm,
      [name]: value
    });
  };

  // Handle expertise input as comma-separated values
  const handleExpertiseChange = (e) => {
    setMentorForm({
      ...mentorForm,
      expertise: e.target.value
    });
  };

  // Handle event form input changes
  const handleEventInputChange = (e) => {
    const { name, value } = e.target;
    setEventForm({
      ...eventForm,
      [name]: value
    });
  };

  // Handle discussion form input changes
  const handleDiscussionInputChange = (e) => {
    const { name, value } = e.target;
    setDiscussionForm({
      ...discussionForm,
      [name]: value
    });
  };

  // Submit mentor form
  const handleMentorSubmit = (e) => {
    e.preventDefault();
    
    // Process expertise from string to array
    const expertiseArray = mentorForm.expertise
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '');
    
    // Create new mentor object
    const newMentor = {
      ...mentorForm,
      expertise: expertiseArray
    };
    
    // Add new mentor to the list
    setMentors([...mentors, newMentor]);
    
    // Reset form and hide it
    setMentorForm({
      name: '',
      role: '',
      company: '',
      expertise: '',
      availability: '',
      avatar: '/Images/mentors/default.jpg'
    });
    setShowMentorForm(false);
  };

  // Submit event form
  const handleEventSubmit = (e) => {
    e.preventDefault();
    
    // Create new event object
    const newEvent = {
      ...eventForm,
      attendees: Number(eventForm.attendees) || 0
    };
    
    // Add new event to the list
    setEvents([...events, newEvent]);
    
    // Reset form and hide it
    setEventForm({
      title: '',
      date: '',
      time: '',
      location: '',
      attendees: 0,
      image: '/Images/events/default.jpg'
    });
    setShowEventForm(false);
  };

  // Submit discussion form
  const handleDiscussionSubmit = (e) => {
    e.preventDefault();
    
    // Process tags from string to array
    const tagsArray = discussionForm.tags
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '');
    
    // Create new discussion object
    const newDiscussion = {
      ...discussionForm,
      tags: tagsArray,
      replies: 0,
      views: 1,
      time: 'Just now'
    };
    
    // Add new discussion to the list
    setDiscussions([...discussions, newDiscussion]);
    
    // Reset form and hide it
    setDiscussionForm({
      title: '',
      tags: '',
      content: '',
      author: 'Current User',
      avatar: '/Images/avatars/default.jpg'
    });
    setShowDiscussionForm(false);
  };

  return (
    <div className="community-container">
      <Navbar />
      <div className="community-page">
        <div className="community-hero">
          <h1>Join Our Thriving Community</h1>
          <p>Connect, share, and grow with like-minded women</p>
        </div>

        <div className="community-tabs">
          <button 
            className={`tab-btn ${activeTab === 'discussions' ? 'active' : ''}`}
            onClick={() => setActiveTab('discussions')}
          >
            Discussions
          </button>
          <button 
            className={`tab-btn ${activeTab === 'mentorship' ? 'active' : ''}`}
            onClick={() => setActiveTab('mentorship')}
          >
            Find a Mentor
          </button>
          <button 
            className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
        </div>

        {activeTab === 'discussions' && (
          <section className="discussions-section">
            <div className="section-header">
              <h2>Recent Discussions</h2>
              <button 
                className="create-post-btn" 
                onClick={() => setShowDiscussionForm(true)}
              >
                Start Discussion
              </button>
            </div>
            
            {/* Discussion Form Modal */}
            {showDiscussionForm && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <h2>Start a New Discussion</h2>
                  <form onSubmit={handleDiscussionSubmit} className="discussion-form">
                    <div className="form-group">
                      <label>Title</label>
                      <input 
                        type="text" 
                        name="title" 
                        value={discussionForm.title} 
                        onChange={handleDiscussionInputChange}
                        placeholder="What would you like to discuss?"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Tags (comma separated)</label>
                      <input 
                        type="text" 
                        name="tags" 
                        value={discussionForm.tags} 
                        onChange={handleDiscussionInputChange}
                        placeholder="e.g. career, tech, advice"
                      />
                    </div>
                    <div className="form-group">
                      <label>Content</label>
                      <textarea 
                        name="content" 
                        value={discussionForm.content} 
                        onChange={handleDiscussionInputChange}
                        rows="5"
                        placeholder="Share your thoughts or questions..."
                        required
                      />
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={() => setShowDiscussionForm(false)}>Cancel</button>
                      <button type="submit">Post Discussion</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            <div className="discussions-list">
              {discussions.map((discussion, index) => (
                <div key={index} className="discussion-card">
                  <div className="discussion-avatar">
                    <img src={discussion.avatar} alt={discussion.author} />
                  </div>
                  <div className="discussion-content">
                    <h3>{discussion.title}</h3>
                    <div className="discussion-meta">
                      <span>By {discussion.author}</span>
                      <span>{discussion.time}</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                    </div>
                    <div className="discussion-tags">
                      {discussion.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'mentorship' && (
          <section className="mentorship-section">
            <div className="section-header">
              <h2>Available Mentors</h2>
              <button 
                className="become-mentor-btn" 
                onClick={() => setShowMentorForm(true)}
              >
                Become a Mentor
              </button>
            </div>
            
            {/* Mentor Form Modal */}
            {showMentorForm && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <h2>Become a Mentor</h2>
                  <form onSubmit={handleMentorSubmit} className="mentor-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={mentorForm.name} 
                        onChange={handleMentorInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Professional Role</label>
                      <input 
                        type="text" 
                        name="role" 
                        value={mentorForm.role} 
                        onChange={handleMentorInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={mentorForm.company} 
                        onChange={handleMentorInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Expertise (comma separated)</label>
                      <input 
                        type="text" 
                        name="expertise" 
                        value={mentorForm.expertise} 
                        onChange={handleExpertiseChange}
                        placeholder="e.g. Web Development, Leadership, AI"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Availability</label>
                      <input 
                        type="text" 
                        name="availability" 
                        value={mentorForm.availability} 
                        onChange={handleMentorInputChange}
                        placeholder="e.g. 2 slots available"
                        required
                      />
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={() => setShowMentorForm(false)}>Cancel</button>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            <div className="mentors-grid">
              {mentors.map((mentor, index) => (
                <div key={index} className="mentor-card">
                  <div className="mentor-header">
                    <img src={mentor.avatar} alt={mentor.name} />
                    <div className="mentor-status">{mentor.availability}</div>
                  </div>
                  <div className="mentor-info">
                    <h3>{mentor.name}</h3>
                    <p className="mentor-role">{mentor.role} at {mentor.company}</p>
                    <div className="mentor-expertise">
                      {mentor.expertise.map((skill, i) => (
                        <span key={i} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                    <button className="connect-btn">Connect</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'events' && (
          <section className="events-section">
            <div className="section-header">
              <h2>Upcoming Events</h2>
              <button 
                className="create-event-btn" 
                onClick={() => setShowEventForm(true)}
              >
                Create Event
              </button>
            </div>
            
            {/* Event Form Modal */}
            {showEventForm && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <h2>Create a New Event</h2>
                  <form onSubmit={handleEventSubmit} className="event-form">
                    <div className="form-group">
                      <label>Event Title</label>
                      <input 
                        type="text" 
                        name="title" 
                        value={eventForm.title} 
                        onChange={handleEventInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <input 
                        type="text" 
                        name="date" 
                        value={eventForm.date} 
                        onChange={handleEventInputChange}
                        placeholder="e.g. April 15, 2024"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Time</label>
                      <input 
                        type="text" 
                        name="time" 
                        value={eventForm.time} 
                        onChange={handleEventInputChange}
                        placeholder="e.g. 6:00 PM - 8:00 PM"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Location</label>
                      <input 
                        type="text" 
                        name="location" 
                        value={eventForm.location} 
                        onChange={handleEventInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Initial Attendees</label>
                      <input 
                        type="number" 
                        name="attendees" 
                        value={eventForm.attendees} 
                        onChange={handleEventInputChange}
                        min="0"
                      />
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={() => setShowEventForm(false)}>Cancel</button>
                      <button type="submit">Create Event</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            <div className="events-grid">
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event-info">
                    <h3>{event.title}</h3>
                    <p><i className="far fa-calendar"></i> {event.date}</p>
                    <p><i className="far fa-clock"></i> {event.time}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                    <p><i className="fas fa-users"></i> {event.attendees} attending</p>
                    <button className="join-event-btn">Join Event</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Community;