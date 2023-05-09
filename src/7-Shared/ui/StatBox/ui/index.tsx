import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import React from 'react';
import { InewTheme } from '../../../assets/mui/WithTheme';
import { ProgressCircle } from '../../ProgressCircle';

interface IStatBox {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  progress: number;
  increase: string;
}

const StatBox: React.FC<IStatBox> = (props) => {
  const { title, subtitle, icon, progress, increase } = props;
  const theme = useTheme() as InewTheme;
  const colors = theme.palette.additionalColors;

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
