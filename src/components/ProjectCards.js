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

const ProjectCards = ({
  description,
  githubLink,
  netlifyLink,
  screenshot,
  techUsed,
  title
}) => (
  <div>
    <Card>
      <CardImg top width="100%" src={screenshot} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardText>{techUsed}</CardText>
        <CardLink href={netlifyLink}>View Live Project</CardLink>
        <CardLink href={githubLink}>View GitHub Repo</CardLink>
      </CardBody>
    </Card>
  </div>
);

ProjectCards.propTypes = {
  description: PropTypes.string,
  githubLink: PropTypes.Link,
  netlifyLink: PropTypes.Link,
  screenshot: PropTypes.src,
  techUsed: PropTypes.string,
  title: PropTypes.string,
};

export default ProjectCards;
