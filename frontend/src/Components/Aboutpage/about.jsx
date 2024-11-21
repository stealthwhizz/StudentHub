// About.jsx
import React, { useState } from 'react';
import './about.css';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about-section">
      <h2 onClick={toggleDropdown} className="about-heading">
        About Student<span class="highlight">Hub</span> {'>'}{'>'}
      </h2>
      {isOpen && (
        <div className="about-content">
          <p>
            Welcome to Student Hub! We are dedicated to providing students with the best shopping experience for laptops, smartphones, and books. Our mission is to help students find the right tools to succeed in their studies and beyond. 
          </p>
          <p>
            At Student Hub, we understand the unique needs of students, which is why we curate a selection of high-quality products that cater to your academic and personal needs. Whether you're looking for the latest laptop for your coursework, a smartphone to stay connected, or textbooks for your classes, we've got you covered.
          </p>
          <p>
            Thank you for choosing Student Hub. Happy shopping!
          </p>
        </div>
      )}
    </div>
  );
};

export default About;