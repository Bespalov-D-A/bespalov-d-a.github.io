import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';

interface ISidebarProvider {
  component: React.ReactNode;
}

const SidebarProvider: React.FC<ISidebarProvider> = ({ component }) => {
  return <ProSidebarProvider>{component}</ProSidebarProvider>;
};

export default SidebarProvider;
