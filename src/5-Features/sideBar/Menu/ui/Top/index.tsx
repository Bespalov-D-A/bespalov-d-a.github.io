import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import useTheme from '@mui/material/styles/useTheme';
import { InewTheme } from '../../../../../7-Shared/assets/mui/WithTheme';
import { useProSidebar } from 'react-pro-sidebar';

interface ITop {}

const Top: React.FC<ITop> = (props) => {
  const theme = useTheme() as InewTheme;
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      ml="15px"
    >
      <Typography variant="h3" color={theme.palette.additionalColors.grey[100]}>
        ADMINIS
      </Typography>
      <IconButton onClick={() => collapseSidebar(!collapsed)}>
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default Top;
