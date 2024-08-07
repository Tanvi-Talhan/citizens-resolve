import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to the ultimate destination for online casino games. Our mission is to provide a thrilling and safe gaming experience for all players.</p>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="src/assets/images/light-bulb.png" alt="Team Member 1" />
            <h3>Vaibhav Kondhekar</h3>
            <p></p>
            <p>Git management, UI design using bootstrap, creation and pages linking</p>
          </div>
          <div className="team-card">
            <img src="src/assets/images/light-bulb.png" alt="Team Member 2" />
            <h3>Prasanna Mane</h3>
            <p></p>
            <p>Logic building, and creating the games using javascript</p>
          </div>
          <div className="team-card">
            <img src="src/assets/images/light-bulb.png" alt="Team Member 3" />
            <h3>Kamesh Nikode</h3>
            <p></p>
            <p>Logic building, and creating the games using javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
