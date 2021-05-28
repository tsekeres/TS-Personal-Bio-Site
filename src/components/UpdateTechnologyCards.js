import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardLink,
} from 'reactstrap';
import { deleteTechnologies } from '../helpers/data/TechnologiesData';
import TechnologyForm from './TechnologyForm';

const UpdateTechnologyCards = ({ tech, setTechnologies }) => {
  const [updating, setUpdating] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTechnologies(tech.firebaseKey).then(setTechnologies);
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
      <CardImg top width='100%' src={tech.techImage} alt='Card image cap' />
      <CardBody>
        <CardLink href={tech.techURL}>{tech.techName}</CardLink>
        <Button color='danger' onClick={() => handleClick('delete')}>
          Delete Tech
        </Button>
        <Button color='info' onClick={() => handleClick('update')}>
          {updating ? 'Close Form' : 'Update Tech'}
        </Button>
        {updating && (
          <TechnologyForm
            setTechnologies={setTechnologies}
            firebaseKey={tech.firebaseKey}
            techImage={tech.techImage}
            techURL={tech.techURL}
            techName={tech.techName}
          />
        )}
      </CardBody>
    </Card>
  );
};

UpdateTechnologyCards.propTypes = {
  tech: PropTypes.object,
  setTechnologies: PropTypes.func,
};

export default UpdateTechnologyCards;
