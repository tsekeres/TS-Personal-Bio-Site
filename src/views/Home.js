import React from 'react';
import PropTypes from 'prop-types';

function Home({ admin }) {
  return (
    <div className='user-welcome'>
      <h1>Welcome to </h1>
      <hr></hr>
      {admin ? <h2>Hey Tad</h2> : <h2>Welcome visitor</h2>}
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.any,
};

export default Home;
