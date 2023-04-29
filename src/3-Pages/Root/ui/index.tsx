import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../../../4-Widgets/SideBar';
import { TopBar } from '../../../4-Widgets/TopBar';
import CustomScrollBar from '../../../7-Shared/ui/CustomScrollBar';

interface IRootPage {}

const RootPage: React.FC<IRootPage> = (props) => {
  return (
    <div className="app">
      <main className="wrap">
        <SideBar />
        <div className="content">
          <TopBar />
          <CustomScrollBar
            component={() => (
              <Box p={2}>
                <Outlet />
              </Box>
            )}
          />
        </div>
      </main>
    </div>
  );
};

export default RootPage;
