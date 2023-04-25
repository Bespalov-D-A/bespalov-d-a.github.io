import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useThemeState } from '../../../6-Entities/Common/model/store';
import getColors from '../../../7-Shared/lib/GetColors';

interface ISearch {}

const Search: React.FC<ISearch> = (props) => {
  const token = useThemeState((state) => state.token);
  const colors = getColors(token);

  return (
    <Box style={{ backgroundColor: colors.primary[400] }}>
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
