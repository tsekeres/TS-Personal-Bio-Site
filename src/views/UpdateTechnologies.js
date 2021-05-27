import React from 'react';
import PropTypes from 'prop-types';
import UpdateTechnologyCards from '../components/UpdateTechnologyCards';
import TechnologyForm from '../components/TechnologyForm';

function UpdateTechnologies({ technologies, setTechnologies }) {
  return (
    <>
      <div>
        <TechnologyForm
          formTitle="Add Technology"
          setTechnologies={setTechnologies}
        />
      </div>
      <div className="card-container">
        {technologies?.map((techInfo) => (
          <UpdateTechnologyCards
            key={techInfo.firebaseKey}
            tech={techInfo}
            setTechnologies={setTechnologies}
          />
        ))}
      </div>
    </>
  );
}

UpdateTechnologies.propTypes = {
  technologies: PropTypes.array,
  setTechnologies: PropTypes.func,
};

export default UpdateTechnologies;
