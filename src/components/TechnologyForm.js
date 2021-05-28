import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addTechnologies, updateTechnologies } from '../helpers/data/TechnologiesData';

const TechnologyForm = ({
  formTitle,
  setTechnologies,
  techImage,
  techURL,
  techName,
  firebaseKey
}) => {
  const [tech, setTech] = useState({
    techImage: techImage || '',
    techURL: techURL || '',
    techName: techName || '',
    firebaseKey: firebaseKey || null,
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setTech((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tech.firebaseKey) {
      updateTechnologies(tech).then(setTechnologies);
    } else {
      addTechnologies(tech).then(setTechnologies);
      history.push('/technologies');

      setTech({
        techImage: '',
        techURL: '',
        techName: '',
        firebaseKey: null,
      });
    }
  };

  return (
    <div className="technology-form">
      <Form id="addTechnologyForm" autoComplete="off" onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="techImage">Image:</Label>
          <Input
            name="techImage"
            id="techImage"
            value={tech.techImage}
            type="img"
            placeholder="Enter an Image"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="techURL">URL:</Label>
          <Input
            name="techURL"
            id="techURL"
            value={tech.techURL}
            type="text"
            placeholder="Enter a URL"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="techName">Tech Name: </Label>
          <Input
            name="techName"
            id="techName"
            value={tech.techName}
            type="text"
            placeholder="Enter a Name"
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

TechnologyForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setTechnologies: PropTypes.func,
  techImage: PropTypes.string,
  techURL: PropTypes.string,
  techName: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default TechnologyForm;
