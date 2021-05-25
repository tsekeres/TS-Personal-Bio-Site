import React from 'react';
import PropTypes from 'prop-types';

function Home({ admin }) {
  return (
    <div className='user-welcome'>
      {admin ? <h2>Hey Tad</h2> : <h2>Welcome visitor</h2>}
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.any,
};

export default Home;
