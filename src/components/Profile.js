import React from 'react';
import ProfileImage from '../assets/Profile.jpg';

const Profile = () => (
  <section className='profileImg'>
    <ProfileImage src={ProfileImage} alt='Image of me' />
  </section>
);

export default Profile;
