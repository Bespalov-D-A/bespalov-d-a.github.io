import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { Sidebar } from 'react-pro-sidebar';
import { MenuBlock } from '../../../5-Features/sideBar/Menu';
import { UserBlock } from '../../../5-Features/sideBar/UserBlock';
import { useMainTheme } from '../../../6-Entities/Common/model/hooks';
import { useThemeState } from '../../../6-Entities/Common/model/store';
import getColors from '../../../7-Shared/lib/GetColors';
import s from './index.module.scss';

interface ISideBar {}

const SideBar: React.FC<ISideBar> = (props) => {
  const token = useThemeState((state) => state.token);
  const theme = useMainTheme(token);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState('dashboard');
  const colors = getColors(token);

  return (
    <Box
      className={s.sidebar}
      sx={{
        '& . pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
      }}
    >
      <Sidebar>
        <UserBlock />
        <MenuBlock />
      </Sidebar>
    </Box>
  );
};

export default SideBar;
