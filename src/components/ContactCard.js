import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardImg, CardLink, CardTitle, CardText
} from 'reactstrap';
import profileImage from '../assets/Profile.jpg';

const ContactCard = ({ contact }) => (
  <Card className="contact-card">
    <CardImg top width="100%" src={profileImage} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{contact.name}</CardTitle>
      <CardText>{contact.email}</CardText>
      <CardText>{contact.phone}</CardText>
      <CardLink href={contact.githubURL}>{contact.github}</CardLink>
      <CardLink href={contact.linkedinURL}>{contact.linkedin}</CardLink>
    </CardBody>
  </Card>
);

ContactCard.propTypes = {
  contact: PropTypes.object,
};

export default ContactCard;
