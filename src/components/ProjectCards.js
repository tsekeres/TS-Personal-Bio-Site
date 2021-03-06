import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardLink
} from 'reactstrap';

const ProjectCards = ({ project }) => (
  <Card className="project-card">
    <CardImg top width="90%" src={project.screenshot} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{project.title}</CardTitle>
      <CardText>{project.description}</CardText>
      <CardText>{project.techUsed}</CardText>
      <CardLink href={project.netlifyLink}>View Live Project</CardLink>
      <br></br>
      <CardLink href={project.githubLink}>View GitHub Repo</CardLink>
      <br></br>
      <CardLink href={project.loomLink}>View Project Video</CardLink>
    </CardBody>
  </Card>
);

ProjectCards.propTypes = {
  project: PropTypes.object,
};

export default ProjectCards;
