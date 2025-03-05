/t:/SheCodes/
│
├── server/
│   ├── index.js                   # Server entry point
│   ├── config/
│   │   ├── db.js                  # Database connection
│   │   └── cloudStorage.js        # File upload config (if needed)
│   ├── controllers/
│   │   ├── authController.js      # Authentication logic
│   │   ├── userController.js      # User profile & role management
│   │   ├── courseController.js    # Course & education management
│   │   ├── communityController.js # Community forums, discussions
│   │   ├── mentorController.js    # Mentorship requests & approvals
│   │   ├── businessController.js  # Business & funding resources
│   │   ├── safetyController.js    # Safety & legal guidance
│   ├── middleware/
│   │   ├── authMiddleware.js      # JWT authentication middleware
│   │   ├── roleMiddleware.js      # Role-based access control
│   ├── models/
│   │   ├── User.js                # User schema/model
│   │   ├── Course.js              # Course schema
│   │   ├── Community.js           # Community discussion schema
│   │   ├── Mentor.js              # Mentorship requests schema
│   │   ├── Business.js            # Business funding schema
│   │   ├── Safety.js              # Safety & legal articles schema
│   ├── routes/
│   │   ├── auth.js                # Authentication routes
│   │   ├── user.js                # User profile routes
│   │   ├── courses.js             # Education & skill development
│   │   ├── community.js           # Community forum routes
│   │   ├── mentor.js              # Mentorship & leadership routes
│   │   ├── business.js            # Business & funding routes
│   │   ├── safety.js              # Safety & legal info routes
│   ├── uploads/                   # File uploads (if applicable)
│   ├── .env                        # Environment variables
│   ├── package.json                # Dependencies & scripts
│   ├── README.md                   # API documentation
│
└── client/
    └── src/
        ├── App.js                 # Main React component with routes
        ├── index.css              # Global styles
        ├── main.jsx               # Entry point
        ├── context/
        │   ├── AuthContext.jsx     # Authentication context
        │   ├── UserContext.jsx     # User & role context
        ├── pages/
        │   ├── Login/
        │   │   └── Login.jsx       # Login component
        │   ├── Register/
        │   │   └── Register.jsx    # Registration component
        │   ├── Dashboard/
        │   │   └── Dashboard.jsx   # User dashboard
        │   ├── Education/
        │   │   ├── Courses.jsx     # List of courses
        │   │   ├── CourseDetail.jsx# Course details page
        │   ├── Community/
        │   │   ├── Forum.jsx       # Community discussions
        │   │   ├── PostDetail.jsx  # View individual posts
        │   ├── Mentorship/
        │   │   ├── Mentors.jsx     # List of available mentors
        │   │   ├── MentorDetail.jsx# Mentor profile
        │   ├── Business/
        │   │   ├── Funding.jsx     # Business funding resources
        │   │   ├── ApplyFunding.jsx# Apply for funding
        │   ├── Safety/
        │   │   ├── SafetyTips.jsx  # Safety & legal guidance
        │   │   ├── LegalRights.jsx # Legal rights information
        ├── components/
        │   ├── Navbar.jsx          # Navbar component
        │   ├── Footer.jsx          # Footer component
        │   ├── Sidebar.jsx         # Sidebar navigation
        ├── assets/                 # Images, icons, styles
        ├── utils/                  # Utility functions & helpers
        ├── api/                    # API calls (Axios)
        │   ├── auth.js             # Auth API calls
        │   ├── courses.js          # Courses API calls
        │   ├── community.js        # Community API calls
        │   ├── mentorship.js       # Mentorship API calls
        │   ├── business.js         # Business API calls
        │   ├── safety.js           # Safety API calls
