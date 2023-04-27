import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useTheme from '@mui/material/styles/useTheme';
import { InewTheme } from '../../../7-Shared/assets/mui/WithTheme';

interface ISearch {}

const Search: React.FC<ISearch> = (props) => {
  const theme = useTheme() as InewTheme;
  console.log(theme);

  return (
    <Box
      style={{ backgroundColor: theme.palette.additionalColors.primary[400] }}
    >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
