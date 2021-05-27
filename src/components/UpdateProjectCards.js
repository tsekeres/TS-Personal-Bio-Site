import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardLink,
} from 'reactstrap';
import { deleteProject } from '../helpers/data/ProjectData';
import ProjectForm from './ProjectForm';

const UpdateProjectCards = ({
  project,
  setProjects
}) => {
  const [updating, setUpdating] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(project.firebaseKey)
          .then(setProjects);
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card>
      <CardImg top width='100%' src={project.screenshot} alt='Card image cap' />
      <CardBody>
        <CardTitle tag='h5'>{project.title}</CardTitle>
        <CardText>{project.description}</CardText>
        <CardText>{project.techUsed}</CardText>
        <CardLink href={project.netlifyLink}>View Live Project</CardLink>
        <CardLink href={project.githubLink}>View GitHub Repo</CardLink>
        <CardLink href={project.loomLink}>View Project Video</CardLink>
        <Button color='danger' onClick={() => handleClick('delete')}>
          Delete Project
        </Button>
        <Button color='info' onClick={() => handleClick('update')}>
          {updating ? 'Close Form' : 'Update Project'}
        </Button>
        {updating && (
          <ProjectForm
            formTitle='Update Project'
            setProjects={setProjects}
            firebaseKey={project.firebaseKey}
            title={project.title}
            screenshot={project.screenshot}
            netlifyLink={project.netlifyLink}
            githubLink={project.githubLink}
            loomLink={project.loomLink}
            description={project.description}
            techUsed={project.techUsed}
          />
        )}
      </CardBody>
    </Card>
  );
};

UpdateProjectCards.propTypes = {
  project: PropTypes.object,
  setProjects: PropTypes.func,
};

export default UpdateProjectCards;
