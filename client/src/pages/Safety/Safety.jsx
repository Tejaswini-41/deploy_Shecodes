import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Safety.css';

const Safety = () => {
  const [activeTab, setActiveTab] = useState('laws');
  const [selectedState, setSelectedState] = useState('maharashtra');
  const [searchQuery, setSearchQuery] = useState('');

  const legalRights = {
    workplace: [
      {
        title: "Sexual Harassment of Women at Workplace Act, 2013",
        description: "Protection against workplace harassment",
        keyPoints: [
          "Mandatory Internal Complaints Committee",
          "90 days timeline for investigation",
          "Protection against retaliation",
          "Confidentiality provisions"
        ],
        helplineNumber: "1091"
      },
      // Add more workplace laws...
    ],
    domestic: [
      {
        title: "Protection of Women from Domestic Violence Act, 2005",
        description: "Legal protection against domestic violence",
        keyPoints: [
          "Right to reside in shared household",
          "Protection against physical/mental abuse",
          "Economic rights and maintenance",
          "Custody and compensation orders"
        ],
        helplineNumber: "181"
      },
      // Add more domestic laws...
    ]
  };

  const emergencyContacts = [
    {
      name: "Women's Helpline",
      number: "1091",
      available: "24/7",
      type: "Emergency"
    },
    {
      name: "Domestic Violence Helpline",
      number: "181",
      available: "24/7",
      type: "Emergency"
    },
    // Add more emergency contacts...
  ];

  const safetyTips = [
    {
      category: "Personal Safety",
      tips: [
        "Stay aware of surroundings",
        "Share location with trusted contacts",
        "Learn basic self-defense",
        "Keep emergency numbers handy"
      ],
      icon: "fas fa-shield-alt"
    },
    // Add more safety tips...
  ];

  const selfDefenseVideos = [
    {
      title: "Basic Self-Defense Moves Every Woman Should Know",
      instructor: "Sarah Chen",
      duration: "10 mins",
      thumbnail: "https://img.youtube.com/vi/KVpxP3ZZtAc/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=KVpxP3ZZtAc"
    },
    {
      title: "5 Self-Defense Moves Every Woman Should Know",
      instructor: "Roxanne Jones",
      duration: "8 mins",
      thumbnail: "https://img.youtube.com/vi/T7aNSRoDCmg/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=T7aNSRoDCmg"
    },
    {
      title: "Self Defense for Women - 10 Techniques",
      instructor: "Michelle Lee",
      duration: "12 mins",
      thumbnail: "https://img.youtube.com/vi/Gx3_x6RH1J4/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=Gx3_x6RH1J4"
    },
    {
      title: "Women's Self-Defense Techniques",
      instructor: "Priya Sharma",
      duration: "7 mins",
      thumbnail: "https://img.youtube.com/vi/9qyD7vjVfLI/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=9qyD7vjVfLI"
    },
    {
      title: "Self-Defense in Confined Spaces",
      instructor: "Tara Wilson",
      duration: "15 mins",
      thumbnail: "https://img.youtube.com/vi/9m-x64bKfR4/hqdefault.jpg", // Updated to match video ID
      videoUrl: "https://youtu.be/9m-x64bKfR4?si=a1He4kT5T43n-wWB"
    },
    {
      title: "How to Defend Against Common Attacks",
      instructor: "Alicia Rodriguez",
      duration: "9 mins",
      thumbnail: "https://img.youtube.com/vi/SfAoGd7Ej6E/hqdefault.jpg",
      videoUrl: "https://youtu.be/q1pBBRi3XF8?si=HiRrzuQMUUMypXV6"
    }
  ];

  return (
    <div className="safety-container">
      <Navbar />
      <div className="safety-page">
        <div className="safety-hero">
          <h1>Know Your Rights, Stay Safe</h1>
          <p>Comprehensive guide to women's legal rights and safety</p>
          
          <div className="emergency-banner">
            <i className="fas fa-exclamation-triangle"></i>
            <span>Emergency? Call Women's Helpline: 1091</span>
            <button className="sos-btn">SOS Alert</button>
          </div>
        </div>

        <div className="safety-navigation">
          <button 
            className={`nav-btn ${activeTab === 'laws' ? 'active' : ''}`}
            onClick={() => setActiveTab('laws')}
          >
            Legal Rights
          </button>
          <button 
            className={`nav-btn ${activeTab === 'emergency' ? 'active' : ''}`}
            onClick={() => setActiveTab('emergency')}
          >
            Emergency Help
          </button>
          <button 
            className={`nav-btn ${activeTab === 'selfDefense' ? 'active' : ''}`}
            onClick={() => setActiveTab('selfDefense')}
          >
            Self Defense
          </button>
          <button 
            className={`nav-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>

        {activeTab === 'laws' && (
          <section className="legal-rights-section">
            <div className="search-filters">
              <input 
                type="text" 
                placeholder="Search legal information..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <select 
                value={selectedState} 
                onChange={(e) => setSelectedState(e.target.value)}
                className="state-select"
              >
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                {/* Add more states */}
              </select>
            </div>

            <div className="laws-grid">
              <div className="workplace-laws">
                <h2>Workplace Rights</h2>
                {legalRights.workplace.map((law, index) => (
                  <div key={index} className="law-card">
                    <h3>{law.title}</h3>
                    <p>{law.description}</p>
                    <ul className="key-points">
                      {law.keyPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="helpline">
                      Helpline: {law.helplineNumber}
                    </div>
                  </div>
                ))}
              </div>

              <div className="domestic-laws">
                <h2>Domestic Rights</h2>
                {legalRights.domestic.map((law, index) => (
                  <div key={index} className="law-card">
                    <h3>{law.title}</h3>
                    <p>{law.description}</p>
                    <ul className="key-points">
                      {law.keyPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="helpline">
                      Helpline: {law.helplineNumber}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'emergency' && (
          <section className="emergency-section">
            <div className="emergency-map">
              <h2>Nearby Safe Places</h2>
              {/* Add interactive map component */}
              <div className="map-placeholder">
                Map showing police stations, hospitals, and safe zones
              </div>
            </div>

            <div className="emergency-contacts">
              <h2>Emergency Contacts</h2>
              <div className="contacts-grid">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="contact-card">
                    <h3>{contact.name}</h3>
                    <div className="contact-number">
                      <i className="fas fa-phone"></i>
                      {contact.number}
                    </div>
                    <span className="availability">{contact.available}</span>
                    <button className="call-btn">Call Now</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'selfDefense' && (
          <section className="self-defense-section">
            <div className="video-tutorials">
              <h2>Self-Defense Tutorials</h2>
              <div className="videos-grid">
                {selfDefenseVideos.map((video, index) => (
                  <div 
                    key={index} 
                    className="video-card"
                    onClick={() => window.open(video.videoUrl, '_blank')}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="play-button">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <div className="video-info">
                      <h3>{video.title}</h3>
                      <p>{video.instructor}</p>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="safety-tips">
              <h2>Personal Safety Tips</h2>
              <div className="tips-grid">
                {safetyTips.map((category, index) => (
                  <div key={index} className="tips-card">
                    <div className="tips-icon">
                      <i className={category.icon}></i>
                    </div>
                    <h3>{category.category}</h3>
                    <ul>
                      {category.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'resources' && (
          <section className="resources-section">
            <div className="downloadable-resources">
              <h2>Safety Resources</h2>
              <div className="resources-grid">
                <a href="#" className="resource-card">
                  <i className="fas fa-file-pdf"></i>
                  <h3>Legal Rights Handbook</h3>
                  <p>Comprehensive guide to women's legal rights</p>
                </a>
                <a href="#" className="resource-card">
                  <i className="fas fa-map-marked-alt"></i>
                  <h3>Safe Places Directory</h3>
                  <p>List of verified safe places and shelters</p>
                </a>
                <a href="#" className="resource-card">
                  <i className="fas fa-phone-square-alt"></i>
                  <h3>Emergency Contacts</h3>
                  <p>Printable list of important helpline numbers</p>
                </a>
              </div>
            </div>
          </section>
        )}

        <section className="safety-community">
          <h2>Join Our Safety Network</h2>
          <p>Connect with other women and share safety tips</p>
          <button className="join-network-btn">Join Community</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Safety;
