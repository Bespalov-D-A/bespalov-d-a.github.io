import React from 'react';
import { ContactsData } from '../../../5-Features/pages/contacts/ContactsData';
import { Header } from '../../../7-Shared/ui/Header';

interface IContacts {}

const Contacts: React.FC<IContacts> = (props) => {
  return (
    <>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <ContactsData />
    </>
  );
};

export default Contacts;
