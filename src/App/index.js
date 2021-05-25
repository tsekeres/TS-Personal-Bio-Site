import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import getProjects from '../helpers/data/ProjectData';

const adminUIDs = [
  process.env.REACT_APP_ADMIN_TAD
];

function App() {
  const [projects, setProjects] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects);
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
    <div className='App'>
      <NavBar admin={admin} />
      <Routes
        admin={admin}
        projects={projects}
        setProjects={setProjects}
      />
    </div>
  );
}

export default App;
