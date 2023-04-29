import Box from '@mui/material/Box';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import useTheme from '@mui/material/styles/useTheme';
import React from 'react';
import { InewTheme } from '../../../../../../7-Shared/assets/mui/WithTheme';
import Typography from '@mui/material/Typography';

interface IAccessCell {
  access: 'admin' | 'user' | 'manager';
}

const AccessCell: React.FC<IAccessCell> = ({ access }) => {
  const theme = useTheme() as InewTheme;

  return (
    <Box
      style={{
        width: '60%',
        margin: '0 auto',
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:
          access === 'admin'
            ? theme.palette.additionalColors.greenAccent[600]
            : access === 'manager'
            ? theme.palette.additionalColors.greenAccent[700]
            : theme.palette.additionalColors.greenAccent[700],

        borderRadius: '4px',
      }}
    >
      {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
      {access === 'manager' && <SecurityOutlinedIcon />}
      {access === 'user' && <LockOpenOutlinedIcon />}
      <Typography
        color={theme.palette.additionalColors.grey[100]}
        sx={{ ml: '5px' }}
      >
        {access}
      </Typography>
    </Box>
  );
};

export default AccessCell;
