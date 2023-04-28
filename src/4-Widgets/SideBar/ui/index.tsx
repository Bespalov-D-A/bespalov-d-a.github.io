import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import useTheme from '@mui/material/styles/useTheme';
import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Sidebar,
  sidebarClasses,
  useProSidebar,
} from 'react-pro-sidebar';
import { MenuBlock } from '../../../5-Features/sideBar/Menu';
import { UserBlock } from '../../../5-Features/sideBar/UserBlock';
import { InewTheme } from '../../../7-Shared/assets/mui/WithTheme';
import s from './index.module.scss';
import './index.scss';
import Top from '../../../5-Features/sideBar/Menu/ui/Top';

interface ISideBar {}

const SideBar: React.FC<ISideBar> = (props) => {
  const theme = useTheme() as InewTheme;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState('dashboard');
  const { collapseSidebar, collapsed } = useProSidebar();

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
        <Menu>
          <MenuItem
            rootStyles={{
              margin: '10px 0 20px 0',
              color: theme.palette.additionalColors.grey[100],
            }}
            icon={
              collapsed ? (
                <MenuIcon onClick={() => collapseSidebar(!collapsed)} />
              ) : undefined
            }
          >
            {collapsed || <Top />}
          </MenuItem>
          <UserBlock />
          <MenuBlock />
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
