import React from 'react';
import PropTypes from 'prop-types';
import ContactCard from '../components/ContactCard';

function Contacts({ contacts, setContacts }) {
  return (
    <>
      <div className='card-container'>
        {contacts?.map((contactInfo) => (
          <ContactCard
            key={contactInfo.firebaseKey}
            contact={contactInfo}
            setContacts={setContacts}
          />
        ))}
      </div>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
};

export default Contacts;
