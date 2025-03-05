import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Leadership.css';

const Leadership = () => {
  const [activeTab, setActiveTab] = useState('inspiration');

  const leaderSpotlights = [
    {
      name: "Kiran Mazumdar Shaw",
      role: "Founder & CEO, Biocon",
      image: "/Images/leaders/kiran.jpg",
      quote: "I faced a lot of rejection initially, but I persevered.",
      achievements: [
        "First Indian woman to reach $1B net worth",
        "Padma Bhushan recipient",
        "Building Asia's largest biopharmaceutical company"
      ]
    },
    {
      name: "Falguni Nayar",
      role: "Founder & CEO, Nykaa",
      image: "/Images/leaders/falguni.jpg",
      quote: "Age is just a number when it comes to entrepreneurship.",
      achievements: [
        "Built India's leading beauty retail platform",
        "Former investment banker turned entrepreneur",
        "Created a billion-dollar beauty empire"
      ]
    }
  ];

  const leadershipPrograms = [
    {
      title: "Executive Leadership Workshop",
      duration: "6 weeks",
      format: "Hybrid",
      startDate: "April 15, 2024",
      topics: [
        "Strategic Thinking",
        "Team Management",
        "Communication Skills",
        "Decision Making"
      ],
      mentor: "Dr. Priya Sharma"
    },
    {
      title: "Women in Tech Leadership",
      duration: "8 weeks",
      format: "Online",
      startDate: "May 1, 2024",
      topics: [
        "Technical Leadership",
        "Project Management",
        "Innovation Strategy",
        "Career Growth"
      ],
      mentor: "Sarah Chen"
    }
  ];

  const resources = [
    {
      title: "Personal Brand Building",
      type: "Workshop",
      date: "March 30, 2024",
      instructor: "Maya Patel",
      image: "/Images/workshops/personal-brand.jpg"
    },
    {
      title: "Negotiation Skills",
      type: "Masterclass",
      date: "April 5, 2024",
      instructor: "Lisa Wong",
      image: "/Images/workshops/negotiation.jpg"
    }
  ];

  return (
    <div className="leadership-container">
      <Navbar />
      <div className="leadership-page">
        <div className="leadership-hero">
          <h1>Women in Leadership</h1>
          <p>Inspiring the next generation of women leaders</p>
        </div>

        <div className="leadership-navigation">
          <button 
            className={`nav-btn ${activeTab === 'inspiration' ? 'active' : ''}`}
            onClick={() => setActiveTab('inspiration')}
          >
            Inspiring Leaders
          </button>
          <button 
            className={`nav-btn ${activeTab === 'programs' ? 'active' : ''}`}
            onClick={() => setActiveTab('programs')}
          >
            Leadership Programs
          </button>
          <button 
            className={`nav-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>

        {activeTab === 'inspiration' && (
          <section className="leader-spotlights">
            <h2>Leader Spotlights</h2>
            <div className="leaders-grid">
              {leaderSpotlights.map((leader, index) => (
                <div key={index} className="leader-card">
                  <div className="leader-image">
                    <img src={leader.image} alt={leader.name} />
                  </div>
                  <div className="leader-info">
                    <h3>{leader.name}</h3>
                    <span className="leader-role">{leader.role}</span>
                    <blockquote className="leader-quote">{leader.quote}</blockquote>
                    <div className="achievements">
                      <h4>Key Achievements</h4>
                      <ul>
                        {leader.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'programs' && (
          <section className="leadership-programs">
            <h2>Leadership Development Programs</h2>
            <div className="programs-grid">
              {leadershipPrograms.map((program, index) => (
                <div key={index} className="program-card">
                  <div className="program-header">
                    <h3>{program.title}</h3>
                    <span className="program-format">{program.format}</span>
                  </div>
                  <div className="program-details">
                    <p><i className="far fa-clock"></i> {program.duration}</p>
                    <p><i className="far fa-calendar"></i> Starts {program.startDate}</p>
                    <p><i className="fas fa-chalkboard-teacher"></i> Mentor: {program.mentor}</p>
                    <div className="program-topics">
                      <h4>Key Topics</h4>
                      <ul>
                        {program.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="enroll-btn">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'resources' && (
          <section className="leadership-resources">
            <h2>Leadership Resources</h2>
            <div className="resources-grid">
              {resources.map((resource, index) => (
                <div key={index} className="resource-card">
                  <div className="resource-image">
                    <img src={resource.image} alt={resource.title} />
                    <span className="resource-type">{resource.type}</span>
                  </div>
                  <div className="resource-info">
                    <h3>{resource.title}</h3>
                    <p><i className="far fa-calendar"></i> {resource.date}</p>
                    <p><i className="fas fa-user"></i> {resource.instructor}</p>
                    <button className="register-btn">Register Now</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="community-cta">
          <h2>Join Our Leadership Community</h2>
          <p>Connect with ambitious women leaders and grow together</p>
          <button className="join-btn">Join Network</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Leadership;
