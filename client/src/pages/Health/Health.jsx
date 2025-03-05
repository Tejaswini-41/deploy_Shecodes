import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Health.css';

const Health = () => {
  const [activeSection, setActiveSection] = useState('menstrual');

  const menstrualInfo = {
    phases: [
      {
        name: "Menstrual Phase",
        duration: "Days 1-5",
        description: "The beginning of the menstrual cycle, when the uterine lining sheds",
        tips: [
          "Stay hydrated",
          "Exercise gently",
          "Get adequate rest",
          "Use heat therapy for cramps"
        ],
        icon: "fas fa-tint"
      },
      {
        name: "Follicular Phase",
        duration: "Days 1-13",
        description: "The ovary prepares to release an egg, estrogen levels rise",
        tips: [
          "Increase iron intake",
          "Maintain good nutrition",
          "Stay active",
          "Track your symptoms"
        ],
        icon: "fas fa-circle-notch"
      },
      {
        name: "Ovulation Phase",
        duration: "Day 14",
        description: "Release of the egg from the ovary",
        tips: [
          "Monitor body temperature",
          "Note changes in discharge",
          "Track energy levels",
          "Stay aware of fertility"
        ],
        icon: "fas fa-egg"
      },
      {
        name: "Luteal Phase",
        duration: "Days 15-28",
        description: "Post-ovulation period, hormone levels change",
        tips: [
          "Manage stress",
          "Maintain regular sleep",
          "Balance nutrition",
          "Practice self-care"
        ],
        icon: "fas fa-moon"
      }
    ]
  };

  const hygieneGuides = [
    {
      title: "Personal Care Essentials",
      items: [
        "Daily shower or bath",
        "Use pH-balanced intimate wash",
        "Change undergarments daily",
        "Use breathable cotton underwear"
      ],
      icon: "fas fa-shower"
    },
    {
      title: "Menstrual Hygiene",
      items: [
        "Change pads/tampons every 4-6 hours",
        "Use appropriate absorbency",
        "Maintain cleanliness during period",
        "Proper disposal of products"
      ],
      icon: "fas fa-heart"
    },
    {
      title: "Regular Health Checks",
      items: [
        "Annual gynecological check-up",
        "Regular breast self-examination",
        "Track menstrual cycle",
        "Monitor unusual symptoms"
      ],
      icon: "fas fa-calendar-check"
    }
  ];

  const expertAdvice = [
    {
      expert: "Dr. Sarah Johnson",
      title: "OB/GYN Specialist",
      topic: "Understanding Your Cycle",
      videoUrl: "/videos/cycle-understanding.mp4",
      thumbnail: "/Images/health/video-thumb1.jpg"
    },
    {
      expert: "Dr. Maya Patel",
      title: "Women's Health Expert",
      topic: "Maintaining Intimate Hygiene",
      videoUrl: "/videos/hygiene-tips.mp4",
      thumbnail: "/Images/health/video-thumb2.jpg"
    }
  ];

  return (
    <div className="health-container">
      <Navbar />
      <div className="health-page">
        <div className="health-hero">
          <h1>Women's Health & Wellness</h1>
          <p>Understanding and caring for your body with confidence</p>
        </div>

        <div className="health-navigation">
          <button 
            className={`nav-btn ${activeSection === 'menstrual' ? 'active' : ''}`}
            onClick={() => setActiveSection('menstrual')}
          >
            Menstrual Cycle
          </button>
          <button 
            className={`nav-btn ${activeSection === 'hygiene' ? 'active' : ''}`}
            onClick={() => setActiveSection('hygiene')}
          >
            Personal Hygiene
          </button>
          <button 
            className={`nav-btn ${activeSection === 'expert' ? 'active' : ''}`}
            onClick={() => setActiveSection('expert')}
          >
            Expert Advice
          </button>
        </div>

        {activeSection === 'menstrual' && (
          <section className="menstrual-section">
            <h2>Understanding Your Menstrual Cycle</h2>
            <div className="cycle-phases">
              {menstrualInfo.phases.map((phase, index) => (
                <div key={index} className="phase-card">
                  <div className="phase-icon">
                    <i className={phase.icon}></i>
                  </div>
                  <h3>{phase.name}</h3>
                  <span className="duration">{phase.duration}</span>
                  <p>{phase.description}</p>
                  <ul className="phase-tips">
                    {phase.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="cycle-tracker">
              <h3>Track Your Cycle</h3>
              <button className="track-btn">Open Cycle Calendar</button>
            </div>
          </section>
        )}

        {activeSection === 'hygiene' && (
          <section className="hygiene-section">
            <h2>Personal Hygiene Guide</h2>
            <div className="hygiene-grid">
              {hygieneGuides.map((guide, index) => (
                <div key={index} className="hygiene-card">
                  <div className="guide-icon">
                    <i className={guide.icon}></i>
                  </div>
                  <h3>{guide.title}</h3>
                  <ul>
                    {guide.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'expert' && (
          <section className="expert-section">
            <h2>Expert Health Advice</h2>
            <div className="video-grid">
              {expertAdvice.map((video, index) => (
                <div key={index} className="video-card">
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt={video.topic} />
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="video-info">
                    <h3>{video.topic}</h3>
                    <p>{video.expert}</p>
                    <span>{video.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="health-resources">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <a href="#" className="resource-link">
              <i className="fas fa-book-medical"></i>
              Health Articles
            </a>
            <a href="#" className="resource-link">
              <i className="fas fa-phone"></i>
              Health Helpline
            </a>
            <a href="#" className="resource-link">
              <i className="fas fa-calendar-alt"></i>
              Book Consultation
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Health;
