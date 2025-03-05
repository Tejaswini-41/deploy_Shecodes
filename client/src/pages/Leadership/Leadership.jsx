import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Leadership.css';

const Leadership = () => {
  const [activeTab, setActiveTab] = useState('inspiration');

  const leaderSpotlights = [
    {
      name: "Falguni Nayar",
      role: "Founder & CEO, Nykaa",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbE7x4MzDqFMkKcKAhgNHZ_hLtNBnpA-S5pKMpihU28onujnecjOud1oZHiVGQ924bTJIzE8H4bUSsZ-5gPUGpNIwEQtwDwlT8QhZkh5Y",
      quote: "Age is just a number when it comes to entrepreneurship.",
      achievements: [
        "Built India's leading beauty retail platform",
        "Former investment banker turned entrepreneur",
        "Created a billion-dollar beauty empire"
      ]
    },
    {
      name: "Tejaswini Durge",
      role: "Student at VIIT",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQE3t-Ga8sfKYA/feedshare-shrink_800/B4DZVVK5tBGcAg-/0/1740890726030?e=1744243200&v=beta&t=47heRQ2TDbDXqtCXFJ53_zHMsf_cGNUIBvR_MNrq20k",
      quote: "Leadership is not about being in charge. It is about taking care of those in your charge.",
      achievements: [
        "Batch Representative",
        "AI Enthusiast"
      ]
    },
    {
      name: "Gauri Karkhile",
      role: "Student at VIIT",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsQSa4kYWSDV0gE9hhLhhx1enDsiLHlQ9AdyqWU_fA1XVND0e6VHbMlaceOIGeT7YnnQ&usqp=CAU",
      quote: "The best way to predict the future is to create it.",
      achievements: [
        "Active participant in college events",
        "Aspiring leader"
      ]
    },
    {
      name: "Sanika Boke",
      role: "Student at VIIT",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGG8B0UuwZBzA/feedshare-shrink_1280/B4DZVR40rjG8Ao-/0/1740835612236?e=1744243200&v=beta&t=IFNO7MiInGKGPODDkT6a_fQukxq5uCyKZQGRrMe2OCA",
      quote: "Success is not the key to happiness. Happiness is the key to success.",
      achievements: [
        "Member of various student clubs",
        "Leadership enthusiast"
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