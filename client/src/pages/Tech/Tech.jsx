import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Tech.css';

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const jobListings = [
    {
      company: "Google",
      role: "Software Engineer",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React", "Node.js", "Cloud"],
      logo: "/Images/companies/google.png",
      category: "engineering"
    },
    {
      company: "Microsoft",
      role: "UX Designer",
      location: "Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["UI/UX", "Figma", "User Research"],
      logo: "/Images/companies/microsoft.png",
      category: "design"
    }
  ];

  const bootcamps = [
    {
      name: "Full Stack Web Development",
      duration: "12 weeks",
      mode: "Online",
      price: "$999",
      rating: 4.8,
      students: 1200,
      image: "/Images/bootcamps/webdev.jpg"
    },
    {
      name: "UI/UX Design Bootcamp",
      duration: "8 weeks",
      mode: "Hybrid",
      price: "$799",
      rating: 4.7,
      students: 800,
      image: "/Images/bootcamps/uiux.jpg"
    }
  ];

  const resources = [
    {
      title: "Women Who Code",
      description: "Global community empowering women in tech",
      link: "https://www.womenwhocode.com/",
      icon: "fas fa-code"
    },
    {
      title: "Tech Ladies",
      description: "Job board and community for women in tech",
      link: "https://www.hiretechladies.com/",
      icon: "fas fa-laptop-code"
    }
  ];

  return (
    <div className="tech-container">
      <Navbar />
      <div className="tech-page">
        <div className="tech-hero">
          <h1>Tech Opportunities Hub</h1>
          <p>Discover jobs, bootcamps, and resources to advance your tech career</p>
        </div>

        <section className="jobs-section">
          <h2>Featured Tech Jobs</h2>
          <div className="job-filters">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Roles
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'engineering' ? 'active' : ''}`}
              onClick={() => setActiveCategory('engineering')}
            >
              Engineering
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'design' ? 'active' : ''}`}
              onClick={() => setActiveCategory('design')}
            >
              Design
            </button>
          </div>

          <div className="jobs-grid">
            {jobListings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <img src={job.logo} alt={job.company} className="company-logo" />
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-content">
                  <h3>{job.role}</h3>
                  <p className="company-name">{job.company}</p>
                  <div className="job-details">
                    <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                    <span><i className="fas fa-briefcase"></i> {job.experience}</span>
                  </div>
                  <div className="skills-list">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <button className="apply-btn">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bootcamps-section">
          <h2>Tech Bootcamps</h2>
          <div className="bootcamps-grid">
            {bootcamps.map((bootcamp, index) => (
              <div key={index} className="bootcamp-card">
                <div className="bootcamp-image">
                  <img src={bootcamp.image} alt={bootcamp.name} />
                </div>
                <div className="bootcamp-content">
                  <h3>{bootcamp.name}</h3>
                  <div className="bootcamp-details">
                    <span><i className="far fa-clock"></i> {bootcamp.duration}</span>
                    <span><i className="fas fa-laptop-house"></i> {bootcamp.mode}</span>
                    <span><i className="fas fa-tag"></i> {bootcamp.price}</span>
                  </div>
                  <div className="bootcamp-stats">
                    <span><i className="fas fa-star"></i> {bootcamp.rating}</span>
                    <span><i className="fas fa-users"></i> {bootcamp.students} enrolled</span>
                  </div>
                  <button className="enroll-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="resources-section">
          <h2>Tech Resources</h2>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <a 
                key={index} 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resource-card"
              >
                <i className={resource.icon}></i>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <span className="resource-link">Learn More <i className="fas fa-arrow-right"></i></span>
              </a>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Tech;
