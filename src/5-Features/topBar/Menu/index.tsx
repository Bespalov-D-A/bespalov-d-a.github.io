import s from './index.module.scss';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeState } from '../../../6-Entities/Common/model/store';

interface IMenu {}

const Menu: React.FC<IMenu> = (props) => {
  const setColorMode = useThemeState((state) => state.setToken);
  const colorMode = useThemeState((state) => state.token);

  return (
    <Box className={s.main}>
      <IconButton>
        <NotificationsNoneIcon />
      </IconButton>

      <IconButton>
        <SettingsIcon />
      </IconButton>

      <IconButton>
        <PersonOutlineIcon />
      </IconButton>

      <IconButton onClick={() => setColorMode()}>
        {colorMode === 'light' ? <NightlightIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};

export default Menu;
