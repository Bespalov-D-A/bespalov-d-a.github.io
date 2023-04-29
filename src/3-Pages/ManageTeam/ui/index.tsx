import React from 'react';
import { TeamData } from '../../../5-Features/pages/team/TeamData';
import { Header } from '../../../7-Shared/ui/Header';

interface IManageTeam {}

const ManageTeam: React.FC<IManageTeam> = (props) => {
  return (
    <>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <TeamData />
    </>
  );
};

export default ManageTeam;
