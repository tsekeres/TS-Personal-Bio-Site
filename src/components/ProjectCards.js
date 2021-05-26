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
  <Card>
    <CardImg top width="100%" src={project.screenshot} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{project.title}</CardTitle>
      <CardText>{project.description}</CardText>
      <CardText>{project.techUsed}</CardText>
      <CardLink href={project.netlifyLink}>View Live Project</CardLink>
      <CardLink href={project.githubLink}>View GitHub Repo</CardLink>
    </CardBody>
  </Card>
);

ProjectCards.propTypes = {
  project: PropTypes.object,
};

export default ProjectCards;
