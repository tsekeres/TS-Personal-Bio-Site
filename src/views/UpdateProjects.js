import React from 'react';
import PropTypes from 'prop-types';
import ProjectForm from '../components/ProjectForm';

function UpdateProjects({ project, setProjects }) {
  return (
    <div>
      <ProjectForm
        formTitle='Add Project'
        setProjects={setProjects}
        project={project}
      />
    </div>
  );
}

UpdateProjects.propTypes = {
  setProjects: PropTypes.func,
  project: PropTypes.object
};

export default UpdateProjects;
