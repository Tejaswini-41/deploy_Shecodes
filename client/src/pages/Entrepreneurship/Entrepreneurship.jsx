import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Entrepreneurship.css';

const Entrepreneurship = () => {
  const [activeTab, setActiveTab] = useState('resources');

  const resources = [
    {
      title: "Business Plan Template",
      type: "Template",
      description: "Comprehensive business plan template with financial projections",
      downloads: 1200,
      icon: "fas fa-file-alt"
    },
    {
      title: "Funding Guide 2024",
      type: "Guide",
      description: "Complete guide to securing funding for women entrepreneurs",
      downloads: 850,
      icon: "fas fa-book"
    }
  ];

  const mentors = [
    {
      name: "Indra Nooyi",
      role: "Former CEO, PepsiCo",
      expertise: ["Leadership", "Global Business", "Strategy"],
      availability: "2 slots available",
      image: "/Images/mentors/indra.jpg"
    },
    {
      name: "Sarah Chen",
      role: "VC & Fund Manager",
      expertise: ["Venture Capital", "Startups", "Fundraising"],
      availability: "Available for mentoring",
      image: "/Images/mentors/sarah.jpg"
    }
  ];

  const opportunities = [
    {
      title: "Women Entrepreneurs Fund",
      organization: "Global Impact Ventures",
      amount: "$50,000",
      deadline: "April 30, 2024",
      type: "Grant",
      eligibility: ["Women-owned business", "Tech startups", "Early-stage"]
    },
    {
      title: "Startup Accelerator Program",
      organization: "TechStars Women",
      amount: "$120,000",
      deadline: "May 15, 2024",
      type: "Investment",
      eligibility: ["Tech startups", "Female founders", "MVP ready"]
    }
  ];

  return (
    <div className="entrepreneurship-container">
      <Navbar />
      <div className="entrepreneurship-page">
        <div className="entrepreneurship-hero">
          <h1>Women in Business</h1>
          <p>Resources, funding, and support for women entrepreneurs</p>
        </div>

        <div className="quick-stats">
          <div className="stat-card">
            <i className="fas fa-users"></i>
            <h3>10,000+</h3>
            <p>Women Entrepreneurs</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-hand-holding-usd"></i>
            <h3>$5M+</h3>
            <p>Funding Secured</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-building"></i>
            <h3>500+</h3>
            <p>Successful Startups</p>
          </div>
        </div>

        <div className="content-tabs">
          <button 
            className={`tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
          <button 
            className={`tab-btn ${activeTab === 'mentorship' ? 'active' : ''}`}
            onClick={() => setActiveTab('mentorship')}
          >
            Mentorship
          </button>
          <button 
            className={`tab-btn ${activeTab === 'funding' ? 'active' : ''}`}
            onClick={() => setActiveTab('funding')}
          >
            Funding
          </button>
        </div>

        {activeTab === 'resources' && (
          <section className="resources-section">
            <h2>Business Resources</h2>
            <div className="resources-grid">
              {resources.map((resource, index) => (
                <div key={index} className="resource-card">
                  <div className="resource-icon">
                    <i className={resource.icon}></i>
                    <span className="resource-type">{resource.type}</span>
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="resource-meta">
                    <span>{resource.downloads} downloads</span>
                    <button className="download-btn">Download</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'mentorship' && (
          <section className="mentorship-section">
            <h2>Expert Mentors</h2>
            <div className="mentors-grid">
              {mentors.map((mentor, index) => (
                <div key={index} className="mentor-card">
                  <img src={mentor.image} alt={mentor.name} />
                  <div className="mentor-info">
                    <h3>{mentor.name}</h3>
                    <p className="mentor-role">{mentor.role}</p>
                    <div className="expertise-tags">
                      {mentor.expertise.map((skill, i) => (
                        <span key={i} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                    <span className="availability">{mentor.availability}</span>
                    <button className="connect-btn">Schedule Call</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'funding' && (
          <section className="funding-section">
            <h2>Funding Opportunities</h2>
            <div className="opportunities-grid">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="opportunity-card">
                  <div className="opportunity-header">
                    <h3>{opportunity.title}</h3>
                    <span className="opportunity-type">{opportunity.type}</span>
                  </div>
                  <div className="opportunity-details">
                    <p className="organization">{opportunity.organization}</p>
                    <p className="amount">{opportunity.amount}</p>
                    <div className="eligibility">
                      <h4>Eligibility:</h4>
                      <ul>
                        {opportunity.eligibility.map((criteria, i) => (
                          <li key={i}>{criteria}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="deadline">Deadline: {opportunity.deadline}</p>
                    <button className="apply-btn">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="cta-section">
          <h2>Start Your Business Journey</h2>
          <p>Get personalized guidance and support for your startup</p>
          <button className="schedule-call-btn">Schedule Free Consultation</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Entrepreneurship;
