import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addTechnologies, updateTechnologies } from '../helpers/data/TechnologiesData';

const TechnologyForm = ({
  setTechnologies,
  techImage,
  techName
}) => {
  const [tech, setTech] = useState({
    techImage: techImage || '',
    techName: techName || '',   
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setTechnologies((prevState) => ({
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
        techName: '',
        firebaseKey: null,
      });
    }
  };

  return (
    <div className="technology-form">
      <Form id="addProjectForm" autoComplete="off" onSubmit={handleSubmit}>
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

ProjectForm.propTypes = {
  setTechnologies: PropTypes.func,
  techImage: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default TechnologyForm;
