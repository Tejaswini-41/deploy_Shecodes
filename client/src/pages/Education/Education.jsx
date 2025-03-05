import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Education.css';

const Education = () => {
  const courses = [
    {
      title: "Web Development",
      category: "Technology",
      level: "Beginner",
      duration: "8 weeks",
      image: "https://i.ytimg.com/vi/tfciNyRnjx8/maxresdefault.jpg",
      rating: 4.8,
      enrolled: 1200,
      url: "https://www.youtube.com/watch?v=tfciNyRnjx8"
    },
    {
      title: "Digital Marketing Mastery",
      category: "Marketing",
      level: "Intermediate",
      duration: "6 weeks",
      image: "https://shehandlesit.com/wp-content/uploads/2022/08/What-Role-Women-Play-in-Digital-Marketing-1089x730.jpg",
      rating: 4.7,
      enrolled: 850,
      url: "https://shehandlesit.com/blog/what-role-do-women-play-in-digital-marketing/"
    },
    {
      title: "Financial Literacy for Women",
      category: "Finance",
      level: "Beginner",
      duration: "4 weeks",
      image: "https://i.ytimg.com/vi/bo2XTi68jLQ/maxresdefault.jpg",
      rating: 4.9,
      enrolled: 2100,
      url: "https://www.youtube.com/watch?v=bo2XTi68jLQ"
    },
    {
      title: "Leadership Communication",
      category: "Soft Skills",
      level: "All Levels",
      duration: "5 weeks",
      image: "https://i.ytimg.com/vi/-iaRROTB-Rw/maxresdefault.jpg",
      rating: 4.6,
      enrolled: 1500,
      url: "https://www.youtube.com/watch?v=-iaRROTB-Rw"
    },
    {
      title: "Python Programming",
      category: "Technology",
      level: "Beginner",
      duration: "10 weeks",
      image: "https://i.ytimg.com/vi/7p_rO_1WVH8/maxresdefault.jpg",
      rating: 4.8,
      enrolled: 3000,
      url: "https://www.youtube.com/watch?v=KrBnRcpWGEI"
    },
    {
      title: "Data Science Essentials",
      category: "Technology",
      level: "Intermediate",
      duration: "12 weeks",
      image: "https://i.ytimg.com/vi/ywoxdIw2-Ok/hqdefault.jpg",
      rating: 4.7,
      enrolled: 1800,
      url: "https://www.youtube.com/watch?v=ywoxdIw2-Ok"
    },
    {
      title: "Entrepreneurship 101",
      category: "Business",
      level: "Beginner",
      duration: "6 weeks",
      image: "http://www.ourbusinessladder.com/wp-content/uploads/2019/03/female-entrepreneurship-opportunities-and-challenges.jpg",
      rating: 4.9,
      enrolled: 2500,
      url: "https://www.youtube.com/watch?v=niOV_jSVCKs"
    },
    {
      title: "UX/UI Design Fundamentals",
      category: "Technology",
      level: "Beginner",
      duration: "8 weeks",
      image: "https://i.ytimg.com/vi/puJAFI7yaho/maxresdefault.jpg",
      rating: 4.8,
      enrolled: 1600,
      url: "https://www.youtube.com/watch?v=SRec90j6lTY"
    }
  ];

  const workshops = [
    {
      title: "Personal Branding Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 1:00 PM",
      instructor: "Sarah Johnson",
      spots: 30
    },
    {
      title: "Tech Interview Preparation",
      date: "March 20, 2024",
      time: "2:00 PM - 5:00 PM",
      instructor: "Emily Chen",
      spots: 25
    }
  ];

  return (
    <div className="education-container">
      <Navbar />
      <div className="education-page">
        <div className="education-hero">
          <h1>Empower Your Future with Knowledge</h1>
          <p>Access quality education and skill-building resources designed for women</p>
        </div>

        <section className="course-filters">
          <input type="text" placeholder="Search courses..." className="search-input" />
          <div className="filter-buttons">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Technology</button>
            <button className="filter-btn">Business</button>
            <button className="filter-btn">Leadership</button>
            <button className="filter-btn">Finance</button>
          </div>
        </section>

        <section className="courses-section">
          <h2>Featured Courses</h2>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <span className="course-level">{course.level}</span>
                </div>
                <div className="course-content">
                  <span className="course-category">{course.category}</span>
                  <h3>{course.title}</h3>
                  <div className="course-info">
                    <span><i className="far fa-clock"></i> {course.duration}</span>
                    <span><i className="fas fa-star"></i> {course.rating}</span>
                    <span><i className="fas fa-users"></i> {course.enrolled}</span>
                  </div>
                  <button className="enroll-btn" onClick={() => window.open(course.url, '_blank')}>
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="workshops-section">
          <h2>Upcoming Workshops</h2>
          <div className="workshops-grid">
            {workshops.map((workshop, index) => (
              <div key={index} className="workshop-card">
                <div className="workshop-content">
                  <h3>{workshop.title}</h3>
                  <div className="workshop-info">
                    <p><i className="far fa-calendar"></i> {workshop.date}</p>
                    <p><i className="far fa-clock"></i> {workshop.time}</p>
                    <p><i className="fas fa-chalkboard-teacher"></i> {workshop.instructor}</p>
                    <p><i className="fas fa-user-friends"></i> {workshop.spots} spots available</p>
                  </div>
                  <button className="register-btn">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="resources-section">
          <h2>Learning Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <i className="fas fa-book"></i>
              <h3>E-Library</h3>
              <p>Access our collection of e-books, articles, and research papers</p>
            </div>
            <div className="resource-card">
              <i className="fas fa-video"></i>
              <h3>Video Tutorials</h3>
              <p>Watch expert-led video tutorials and workshops</p>
            </div>
            <div className="resource-card">
              <i className="fas fa-users"></i>
              <h3>Study Groups</h3>
              <p>Join peer study groups and learning communities</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
