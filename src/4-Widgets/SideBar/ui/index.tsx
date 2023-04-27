import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import React, { useState } from 'react';
import { Sidebar, sidebarClasses } from 'react-pro-sidebar';
import { MenuBlock } from '../../../5-Features/sideBar/Menu';
import { UserBlock } from '../../../5-Features/sideBar/UserBlock';
import { InewTheme } from '../../../7-Shared/assets/mui/WithTheme';
import s from './index.module.scss';
import './index.scss';

interface ISideBar {}

const SideBar: React.FC<ISideBar> = (props) => {
  const theme = useTheme() as InewTheme;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState('dashboard');

  return (
    <Box className={s.sidebar} id="side">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: `${theme.palette.additionalColors.primary[400]} !important`,
            height: '100% !important',
          },
        }}
      >
        <UserBlock />
        <MenuBlock />
      </Sidebar>
    </Box>
  );
};

export default SideBar;
