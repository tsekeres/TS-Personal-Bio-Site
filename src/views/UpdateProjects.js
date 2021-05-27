import React from 'react';
import PropTypes from 'prop-types';
import ProjectForm from '../components/ProjectForm';
import UpdateProjectCards from '../components/UpdateProjectCards';

function UpdateProjects({ projects, setProjects }) {
  return (
    <>
      <div>
        <ProjectForm formTitle="Add Project" setProjects={setProjects} />
      </div>
      <div className="card-container">
        {projects?.map((projectInfo) => (
          <UpdateProjectCards
            key={projectInfo.firebaseKey}
            project={projectInfo}
            setProjects={setProjects}
          />
        ))}
      </div>
    </>
  );
}

UpdateProjects.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
};

export default UpdateProjects;
