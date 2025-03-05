import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const mainLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/dashboard/education", label: "Learn" },
    { to: "/dashboard/community", label: "Community" },
    { to: "/dashboard/tech", label: "Tech" },
    { to: "/dashboard/blogs", label: "Blogs" }
  ];

  const moreLinks = [
    { to: "/dashboard/entrepreneurship", label: "Business" },
    { to: "/dashboard/health", label: "Health" },
    { to: "/dashboard/safety", label: "Safety" },
    { to: "/dashboard/leadership", label: "Lead" },
    { to: "/dashboard/contact", label: "Contact" }
  ];

  const handleMoreClick = (e) => {
    e.stopPropagation();
    setShowMore(!showMore);
  };

  const handleLinkClick = (path) => {
    setShowMore(false);
    navigate(path);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMore(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/dashboard">
          <img src="/Images/logo.png" alt="EmpowerHer Logo" className="brand-logo" />
          <span className="brand-text">EmpowerHer</span>
        </Link>
      </div>
      <ul className="nav-links">
        {mainLinks.map((link, index) => (
          <li key={index}><Link to={link.to}>{link.label}</Link></li>
        ))}
        <li className="more-menu" ref={dropdownRef}>
          <button 
            className="more-btn" 
            onClick={handleMoreClick}
          >
            More <i className={`fas fa-chevron-${showMore ? 'up' : 'down'}`}></i>
          </button>
          {showMore && (
            <ul className="dropdown-menu">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <button
                    className="dropdown-link"
                    onClick={() => handleLinkClick(link.to)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <div className="profile-link">
        <Link to="/dashboard/profile">
          <i className="fas fa-user-circle"></i>
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
