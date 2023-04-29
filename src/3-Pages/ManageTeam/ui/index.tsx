import React from 'react';
import { Header } from '../../../7-Shared/ui/Header';

interface IManageTeam {}

const ManageTeam: React.FC<IManageTeam> = (props) => {
  return <Header title="TEAM" subtitle="Managing the Team Members" />;
};

export default ManageTeam;
