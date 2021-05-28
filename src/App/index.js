import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { getProjects } from '../helpers/data/ProjectData';
import { getTechnologies } from '../helpers/data/TechnologiesData';
import getContacts from '../helpers/data/ContactData';

const adminUIDs = [
  process.env.REACT_APP_ADMIN_TAD
];

function App() {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects);
    getTechnologies().then(setTechnologies);
    getContacts().then(setContacts);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && adminUIDs.includes(authed.uid)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar admin={admin} />
      <Routes
        admin={admin}
        projects={projects}
        setProjects={setProjects}
        technologies={technologies}
        setTechnologies={setTechnologies}
        contacts={contacts}
        setContacts={setContacts}
      />
    </>
  );
}

export default App;
