import React from 'react';
import PropTypes from 'prop-types';
import TechnologyCards from '../components/TechnologyCards';

function Technologies({ technologies, setTechnologies }) {
  return (
    <>
      <div className="card-container-2 tech-view">
        {technologies?.map((techInfo) => (
          <TechnologyCards
            key={techInfo.firebaseKey}
            tech={techInfo}
            setTechnologies={setTechnologies}
          />
        ))}
      </div>
    </>
  );
}

Technologies.propTypes = {
  technologies: PropTypes.array,
  setTechnologies: PropTypes.func,
};

export default Technologies;
