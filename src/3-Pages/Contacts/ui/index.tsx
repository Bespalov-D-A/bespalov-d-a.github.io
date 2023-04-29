import React from 'react';
import { Header } from '../../../7-Shared/ui/Header';

interface IContacts {}

const Contacts: React.FC<IContacts> = (props) => {
  return (
    <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
  );
};

export default Contacts;
