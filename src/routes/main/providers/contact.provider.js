import React, { createContext, useContext } from 'react';
import { useContacts } from './contact.hook';

const contactContext = createContext({
  loading: false,
  emailSent: false,
  setEmailSent: () => {},
});

function ContactsProvider({ children }) {
  const contacts = useContacts();
  return (
    <contactContext.Provider value={contacts}>
      {children}
    </contactContext.Provider>
  );
}

function useContactsProvider() {
  return useContext(contactContext);
}

export { ContactsProvider, useContactsProvider };
