import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';

const adminUIDs = [
  process.env.REACT_APP_ADMIN_TAD
];

function App() {
  const [admin, setAdmin] = useState(null);

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
      <Router>
        <NavBar admin={admin} />
        <Routes admin={admin} />
      </Router>
    </div>
  );
}

export default App;
