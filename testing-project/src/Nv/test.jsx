//import React from "react";
//import "./LmsLearn.css"; // Ensure this file exists with the required styles

function LmsLearn() {
  return (
    <div className="lms-learn">
      {/* Header */}
      <header className="navbar">
        <div className="logo">
          <span className="icon" aria-label="Logo">🎓</span>
          <h1>LMS LEARN</h1>
        </div>
        <nav>
          <a href="#explore" aria-label="Explore Courses">Explore Courses</a>
          <a href="#my-courses" aria-label="My Courses">My Courses</a>
        </nav>
        <button className="signout-btn" aria-label="Sign Out">Sign Out</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Effortless learning management system.</h2>
          <p>
            Empowering education through seamless learning management and
            intuitive engagement tools.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="What do you want to learn today"
              aria-label="Search input"
            />
            <button aria-label="Search">Search Now</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URLs
            alt="Student Success"
          />
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URLs
            alt="Graduation Cap"
          />
        </div>
      </section>

      {/* Course Categories */}
      <section className="course-categories" id="categories">
        <h3>Course Categories</h3>
        <div className="categories">
          <button aria-label="Computer Network">Computer Network</button>
          <button aria-label="AI Machine Learning">AI Machine Learning</button>
          <button aria-label="Data Science">Data Science</button>
          <button aria-label="Advance Java">Advance Java</button>
          <button aria-label="Android">Android</button>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <h3>Featured Courses</h3>
        <div className="courses">
          <div className="course">
            <img
              src="" // Replace with actual image URLs
              alt=".testing-project\src\assets\image.pngNET Course"
            />
            <h4>.NET Full Course 2025</h4>
            <p>By: Pro Ks Saini</p>
            <p>$50</p>
          </div>
          <div className="course">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image URLs
              alt="React Course"
            />
            <h4>React + TypeScript 2025</h4>
            <p>By: Pro Sh Verma</p>
            <p>$40</p>
          </div>
          <div className="course">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image URLs
              alt="Flutter Course"
            />
            <h4>Flutter Full Course 2025</h4>
            <p>By: Pro Pr Chopra</p>
            <p>$40</p>
          </div>
          <div className="course">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image URLs
              alt="Python AI Course"
            />
            <h4>Python AI Full Course 2025</h4>
            <p>By: Pro John Doe</p>
            <p>$55</p>
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="expert-team">
        <h3>Our Expertise Team</h3>
        <div className="team">
          <p>- Pro Ks Saini</p>
          <p>- Pro Sh Verma</p>
          <p>- Pro Pr Chopra</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h4>Terms & Conditions:</h4>
        <ul>
          <li>
            User Accounts: You are responsible for keeping your account secure
            and for all activities under your account.
          </li>
          <li>
            Intellectual Property: All content on this site is owned by Gyan Vihar
             & its licensors. Do not copy or redistribute without
            permission.
          </li>
          <li>
            Third-Party Links: We are not responsible for the content or
            policies of third-party websites linked here.
          </li>
        </ul>
        <div className="contact">
          <p>Contact Us:</p>
          <p>📞 1234567890</p>
          <p>📧 gvsupport@gmail.com</p>
        </div>
        <p>Official: www.gyanbihar.com</p>
      </footer>
    </div>
  );
}

export default LmsLearn;
