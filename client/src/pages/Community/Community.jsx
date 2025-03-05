import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Community.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      title: "Breaking into Tech as a Woman",
      author: "Sarah Johnson",
      avatar: "/Images/avatars/sarah.jpg",
      replies: 45,
      views: 1200,
      tags: ["career", "tech", "beginners"],
      time: "2 hours ago"
    },
    {
      title: "Work-Life Balance Tips for Working Moms",
      author: "Maria Garcia",
      avatar: "/Images/avatars/maria.jpg",
      replies: 32,
      views: 890,
      tags: ["lifestyle", "parenting", "career"],
      time: "5 hours ago"
    }
    // Add more discussions...
  ];

  const mentors = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior Tech Lead",
      company: "Google",
      expertise: ["Web Development", "Leadership", "Career Growth"],
      avatar: "/Images/mentors/priya.jpg",
      availability: "Available for mentoring"
    },
    {
      name: "Lisa Chen",
      role: "Startup Founder",
      company: "TechStart Inc.",
      expertise: ["Entrepreneurship", "Business Strategy", "Fundraising"],
      avatar: "/Images/mentors/lisa.jpg",
      availability: "2 slots available"
    }
    // Add more mentors...
  ];

  const events = [
    {
      title: "Women in Tech Meetup",
      date: "March 25, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual",
      attendees: 120,
      image: "/Images/events/meetup.jpg"
    },
    {
      title: "Networking Breakfast",
      date: "April 2, 2024",
      time: "8:30 AM - 10:30 AM",
      location: "Central Cafe, New York",
      attendees: 45,
      image: "/Images/events/networking.jpg"
    }
    // Add more events...
  ];

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
              <button className="create-post-btn">Start Discussion</button>
            </div>
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
              <button className="become-mentor-btn">Become a Mentor</button>
            </div>
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
              <button className="create-event-btn">Create Event</button>
            </div>
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
