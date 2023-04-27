import Box from '@mui/material/Box';
import s from './index.module.scss';
import React from 'react';
import Menu from '../../../5-Features/topBar/Menu';
import Search from '../../../5-Features/topBar/Search';

interface ITopBar {}

const TopBar: React.FC<ITopBar> = (props) => {
  return (
    <Box className={s.main} p={2}>
      <Search />
      <Menu />
    </Box>
  );
};

export default TopBar;
