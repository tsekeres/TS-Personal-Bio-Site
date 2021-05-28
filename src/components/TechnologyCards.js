import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardLink,
} from 'reactstrap';

const TechnologyCards = ({ tech }) => (
  <Card>
    <CardImg top width="100%" src={tech.techImage} alt="Card image cap" />
    <CardBody>
      <CardLink href={tech.techURL}>{tech.techName}</CardLink>
    </CardBody>
  </Card>
);

TechnologyCards.propTypes = {
  tech: PropTypes.object,
};

export default TechnologyCards;
