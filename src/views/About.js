import React from 'react';
import profileImage from '../assets/Profile.jpg';

export default function About() {
  return (
    <>
      <div className="image-container">
        <img className="profile-image" src={profileImage} alt="Image of me" />
      </div>
      <div className="about-content">
        <h5>
          Teaching physical education to elementary school children for twenty
          years has taught me about myself. I love teaching people relevant
          skills and helping them find the &quot;aha&quot; moment when learning
          becomes life. Part of that job is breaking physical skills or concepts
          into logical, buildable steps. I&apos;ve found this teaching skill set
          to be highly relatable to coding and working on a team. The
          development process within a teamwork environment are full of the
          logical, simplified elements that I enjoy. The process also produces
          those &quot;aha&quot; moments that bring so much joy.
        </h5>
        <h5>I am ready to dive into the development world and use my
          skills and talents in a new environment. I want to solve mysteries,
          straighten crooked pathways, and rebuild bridges that are broken,
          grasping the moments of inspiration along the way.
        </h5>
      </div>
    </>
  );
}
