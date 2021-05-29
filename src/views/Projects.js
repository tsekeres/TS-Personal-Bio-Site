import React from 'react';
import PropTypes from 'prop-types';
import ProjectCards from '../components/ProjectCards';

function Projects({ projects, setProjects }) {
  return (
    <>
      <div className="card-container projects-view">
        {projects?.map((projectInfo) => (
          <ProjectCards
            key={projectInfo.firebaseKey}
            project={projectInfo}
            setProjects={setProjects}
          />
        ))}
      </div>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
};

export default Projects;
