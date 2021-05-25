import React from 'react';
import PropTypes from 'prop-types';
import ProjectCards from '../components/ProjectCards';

function Projects({ projects, setProjects }) {
  return (
    <>
      <div className="card-container">
        {projects?.map((projectInfo) => (
          <ProjectCards
            key={projectInfo.firebaseKey}
            firebaseKey={projectInfo.firebaseKey}
            title={projectInfo.title}
            description={projectInfo.description}
            githubLink={projectInfo.githubLink}
            netlifyLink={projectInfo.netlifyLink}
            screenshot={projectInfo.screenshot}
            techUsed={projectInfo.techUsed}
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
