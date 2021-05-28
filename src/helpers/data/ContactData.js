import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getContacts = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/contact.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getContacts;
