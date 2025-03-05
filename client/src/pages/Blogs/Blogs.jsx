import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Blogs.css';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all', 'success-stories', 'tech', 'career', 'leadership', 'wellness'
  ];

  const blogPosts = [
    {
      title: "Breaking the Glass Ceiling in Tech",
      author: "Priya Sharma",
      date: "March 15, 2024",
      category: "success-stories",
      image: "/Images/blogs/tech-ceiling.jpg",
      readTime: "5 min read",
      excerpt: "My journey from a coding bootcamp to becoming CTO...",
      authorImg: "/Images/authors/priya.jpg"
    },
    {
      title: "Work-Life Balance in Remote Work",
      author: "Sarah Wilson",
      date: "March 14, 2024",
      category: "wellness",
      image: "/Images/blogs/remote-work.jpg",
      readTime: "4 min read",
      excerpt: "Tips for maintaining balance while working from home...",
      authorImg: "/Images/authors/sarah.jpg"
    }
    // Add more blog posts...
  ];

  const featuredStory = {
    title: "From Local Business to Global Success",
    author: "Maya Patel",
    image: "/Images/blogs/featured-story.jpg",
    category: "success-stories",
    excerpt: "How I scaled my startup to serve women entrepreneurs worldwide...",
    readTime: "8 min read",
    authorImg: "/Images/authors/maya.jpg"
  };

  return (
    <div className="blogs-container">
      <Navbar />
      <div className="blogs-page">
        <div className="blogs-hero">
          <h1>Stories That Inspire</h1>
          <p>Discover success stories, insights, and knowledge from women leaders</p>
        </div>

        <section className="featured-story">
          <div className="featured-content">
            <img src={featuredStory.image} alt={featuredStory.title} />
            <div className="featured-text">
              <span className="category-tag">{featuredStory.category}</span>
              <h2>{featuredStory.title}</h2>
              <p>{featuredStory.excerpt}</p>
              <div className="author-info">
                <img src={featuredStory.authorImg} alt={featuredStory.author} />
                <span>{featuredStory.author}</span>
                <span className="read-time">{featuredStory.readTime}</span>
              </div>
              <button className="read-more-btn">Read Full Story</button>
            </div>
          </div>
        </section>

        <section className="blog-filters">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.split('-').join(' ')}
              </button>
            ))}
          </div>
        </section>

        <section className="blog-grid">
          {blogPosts
            .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
            .map((post, index) => (
              <article key={index} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="category-tag">{post.category}</span>
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-meta">
                    <div className="author-info">
                      <img src={post.authorImg} alt={post.author} />
                      <span>{post.author}</span>
                    </div>
                    <div className="post-info">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </section>

        <section className="write-blog">
          <div className="write-blog-content">
            <h2>Share Your Story</h2>
            <p>Inspire others by sharing your experiences and insights</p>
            <button className="write-blog-btn">Start Writing</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
