import React from 'react';
import { Header } from '../../../7-Shared/ui/Header';

interface IDashboard {}

const Dashboard: React.FC<IDashboard> = (props) => {
  return <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />;
};

export default Dashboard;
