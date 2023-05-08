import React from 'react';
import { CreateUserForm } from '../../../5-Features/forms/CreateUserForm';
import { Header } from '../../../7-Shared/ui/Header';

interface ICreateUser {}

const CreateUser: React.FC<ICreateUser> = (props) => {
  return (
    <>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <CreateUserForm />
    </>
  );
};

export default CreateUser;
