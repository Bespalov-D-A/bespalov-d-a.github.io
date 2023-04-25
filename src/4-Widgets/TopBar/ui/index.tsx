import Box from '@mui/material/Box';
import s from './index.module.scss';
import React from 'react';
import Menu from '../../../5-Features/topBar/Menu';
import Search from '../../../5-Features/topBar/Search';
import { useThemeState } from '../../../6-Entities/Common/model/store';
import getColors from '../../../7-Shared/lib/GetColors';

interface ITopBar {}

const TopBar: React.FC<ITopBar> = (props) => {
  const token = useThemeState((state) => state.token);
  const colors = getColors(token);

  return (
    <Box
      className={s.main}
      style={{ backgroundColor: colors.primary[400] }}
      p={2}
    >
      <Search />
      <Menu />
    </Box>
  );
};

export default TopBar;
